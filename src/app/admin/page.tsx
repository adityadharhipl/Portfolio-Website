"use client";

import { useState, useEffect } from "react";
import { Container, Box, Typography, TextField, Button, Paper, CircularProgress, Tabs, Tab, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Grid } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import LogoutIcon from "@mui/icons-material/Logout";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const [tab, setTab] = useState(0);

  // Blog State
  const [blogs, setBlogs] = useState<any[]>([]);
  const [blogDialog, setBlogDialog] = useState(false);
  const [editingBlog, setEditingBlog] = useState<any>(null);
  const [blogTitle, setBlogTitle] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [blogImage, setBlogImage] = useState("");

  // CV State
  const [cvUrl, setCvUrl] = useState("");
  const [cvSuccess, setCvSuccess] = useState("");

  useEffect(() => {
    // Check auth by trying to fetch blogs, if it fails, maybe not auth (or just assume simple auth for now)
    // Actually, we can check if cookie exists via an API or just use a simple state since it's a client component.
    // Let's create a simple /api/auth/check route or just assume not authenticated on load and try to fetch blogs.
    checkAuth();
  }, []);

  const checkAuth = () => {
    // Check if we have the cookie set (cookies are httpOnly, so we can't read them directly)
    // Let's just try to fetch CV, if we get it, we are fine. (CV is public anyway)
    // Since there's no complex JWT, we'll rely on the login API response to set our state.
    // For a real app, you'd use a session or a /api/auth/me route.
    const isAuth = localStorage.getItem("admin_auth") === "true";
    setIsAuthenticated(isAuth);
    if (isAuth) {
      fetchData();
    } else {
      setIsAuthenticated(false);
    }
  };

  const fetchData = async () => {
    try {
      const [blogsRes, cvRes] = await Promise.all([
        fetch("/api/blogs").then((r) => r.json()),
        fetch("/api/cv").then((r) => r.json())
      ]);
      if (blogsRes.success) setBlogs(blogsRes.data);
      if (cvRes.success && cvRes.data) setCvUrl(cvRes.data.url);
    } catch (e) {
      console.error(e);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem("admin_auth", "true");
        setIsAuthenticated(true);
        fetchData();
      } else {
        setError(data.message || "Login failed");
      }
    } catch (e) {
      setError("An error occurred");
    }
  };

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    localStorage.removeItem("admin_auth");
    setIsAuthenticated(false);
  };

  const handleSaveBlog = async () => {
    const url = editingBlog ? `/api/blogs/${editingBlog._id}` : "/api/blogs";
    const method = editingBlog ? "PUT" : "POST";
    
    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: blogTitle, content: blogContent, imageUrl: blogImage }),
    });
    
    const data = await res.json();
    if (data.success) {
      setBlogDialog(false);
      fetchData();
    }
  };

  const handleDeleteBlog = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    const res = await fetch(`/api/blogs/${id}`, { method: "DELETE" });
    const data = await res.json();
    if (data.success) fetchData();
  };

  const handleUpdateCv = async () => {
    setCvSuccess("");
    const res = await fetch("/api/cv", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: cvUrl }),
    });
    const data = await res.json();
    if (data.success) {
      setCvSuccess("CV updated successfully!");
      setTimeout(() => setCvSuccess(""), 3000);
    }
  };

  const openBlogDialog = (blog: any = null) => {
    setEditingBlog(blog);
    setBlogTitle(blog ? blog.title : "");
    setBlogContent(blog ? blog.content : "");
    setBlogImage(blog ? blog.imageUrl : "");
    setBlogDialog(true);
  };

  if (isAuthenticated === null) {
    return <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}><CircularProgress /></Box>;
  }

  if (!isAuthenticated) {
    return (
      <Container maxWidth="sm" sx={{ mt: 10 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" gutterBottom align="center">Admin Login</Typography>
          <form onSubmit={handleLogin}>
            <TextField fullWidth margin="normal" label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <TextField fullWidth margin="normal" label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            {error && <Typography color="error" variant="body2" sx={{ mt: 1 }}>{error}</Typography>}
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3, py: 1.5 }}>Login</Button>
          </form>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
        <Typography variant="h3">Admin Dashboard</Typography>
        <Button startIcon={<LogoutIcon />} onClick={handleLogout} variant="outlined" color="error">Logout</Button>
      </Box>

      <Paper sx={{ mb: 4 }}>
        <Tabs value={tab} onChange={(_, v) => setTab(v)} variant="fullWidth">
          <Tab label="Blogs" />
          <Tab label="CV Management" />
        </Tabs>
      </Paper>

      {tab === 0 && (
        <Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
            <Button variant="contained" startIcon={<AddIcon />} onClick={() => openBlogDialog()}>Add New Blog</Button>
          </Box>
          <Grid container spacing={3}>
            {blogs.map((blog) => (
              <Grid size={{ xs: 12, md: 6 }} key={blog._id}>
                <Paper sx={{ p: 3, height: "100%", display: "flex", flexDirection: "column" }}>
                  <Typography variant="h6" gutterBottom>{blog.title}</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1, mb: 2, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {blog.content}
                  </Typography>
                  <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
                    <IconButton color="primary" onClick={() => openBlogDialog(blog)}><EditIcon /></IconButton>
                    <IconButton color="error" onClick={() => handleDeleteBlog(blog._id)}><DeleteIcon /></IconButton>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Dialog open={blogDialog} onClose={() => setBlogDialog(false)} fullWidth maxWidth="md">
            <DialogTitle>{editingBlog ? "Edit Blog" : "New Blog"}</DialogTitle>
            <DialogContent>
              <TextField fullWidth margin="normal" label="Title" value={blogTitle} onChange={(e) => setBlogTitle(e.target.value)} />
              <TextField fullWidth margin="normal" label="Image URL (Optional)" value={blogImage} onChange={(e) => setBlogImage(e.target.value)} />
              <TextField fullWidth margin="normal" label="Content" multiline rows={8} value={blogContent} onChange={(e) => setBlogContent(e.target.value)} />
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setBlogDialog(false)}>Cancel</Button>
              <Button onClick={handleSaveBlog} variant="contained">Save</Button>
            </DialogActions>
          </Dialog>
        </Box>
      )}

      {tab === 1 && (
        <Paper sx={{ p: 4 }}>
          <Typography variant="h6" gutterBottom>Update CV Link</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Provide a direct link to your CV (e.g., Google Drive PDF link). This link will be used when visitors click &quot;Download CV&quot;.
          </Typography>
          <TextField fullWidth label="CV URL" value={cvUrl} onChange={(e) => setCvUrl(e.target.value)} margin="normal" />
          {cvSuccess && <Typography color="success.main" variant="body2" sx={{ mt: 1 }}>{cvSuccess}</Typography>}
          <Button variant="contained" sx={{ mt: 2 }} onClick={handleUpdateCv}>Update CV</Button>
        </Paper>
      )}
    </Container>
  );
}
