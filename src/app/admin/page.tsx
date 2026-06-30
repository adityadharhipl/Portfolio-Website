"use client";

import { useState, useEffect } from "react";
import { Container, Box, Typography, TextField, Button, Paper, CircularProgress, Tabs, Tab, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Grid, ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import LogoutIcon from "@mui/icons-material/Logout";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    background: {
      default: '#07090e',
      paper: '#11141b',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 700,
          borderRadius: 8,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

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
    checkAuth();
  }, []);

  const checkAuth = () => {
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

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBlogImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
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
    return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
          <CircularProgress />
        </Box>
      </ThemeProvider>
    );
  }

  if (!isAuthenticated) {
    return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container maxWidth="sm" sx={{ mt: 15 }}>
          <Paper elevation={24} sx={{ p: 5, border: '1px solid rgba(255,255,255,0.1)' }}>
            <Box sx={{ textAlign: "center", mb: 4 }}>
              <Typography variant="overline" sx={{ letterSpacing: '0.2em', color: 'text.secondary' }}>Access Restricted</Typography>
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>Admin Portal</Typography>
            </Box>
            
            <form onSubmit={handleLogin}>
              <TextField fullWidth margin="normal" label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required variant="outlined" />
              <TextField fullWidth margin="normal" label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required variant="outlined" />
              {error && <Typography color="error" variant="body2" sx={{ mt: 2, textAlign: 'center' }}>{error}</Typography>}
              <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 4, py: 1.5, fontSize: '1rem' }}>Secure Login</Button>
            </form>
          </Paper>
        </Container>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 6 }}>
          <Box>
            <Typography variant="overline" sx={{ letterSpacing: '0.2em', color: 'text.secondary' }}>Dashboard</Typography>
            <Typography variant="h3" sx={{ fontWeight: 900 }}>Portfolio Admin</Typography>
          </Box>
          <Button startIcon={<LogoutIcon />} onClick={handleLogout} variant="outlined" color="error" sx={{ borderRadius: 50, px: 3 }}>
            Logout
          </Button>
        </Box>

        <Paper sx={{ mb: 5, border: '1px solid rgba(255,255,255,0.05)' }}>
          <Tabs value={tab} onChange={(_, v) => setTab(v)} variant="fullWidth" indicatorColor="primary" textColor="primary">
            <Tab label="Manage Blogs" sx={{ fontWeight: 'bold', py: 2 }} />
            <Tab label="CV Link" sx={{ fontWeight: 'bold', py: 2 }} />
          </Tabs>
        </Paper>

        {tab === 0 && (
          <Box>
            <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 4 }}>
              <Button variant="contained" startIcon={<AddIcon />} onClick={() => openBlogDialog()} sx={{ px: 4, py: 1.5, borderRadius: 50 }}>
                Draft New Article
              </Button>
            </Box>
            <Grid container spacing={4}>
              {blogs.map((blog) => (
                <Grid size={{ xs: 12, md: 6 }} key={blog._id}>
                  <Paper sx={{ p: 4, height: "100%", display: "flex", flexDirection: "column", border: '1px solid rgba(255,255,255,0.05)', transition: '0.2s', '&:hover': { borderColor: 'primary.main', transform: 'translateY(-4px)' } }}>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>{blog.title}</Typography>
                    <Typography variant="caption" color="primary" sx={{ display: "block", mb: 2 }}>
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1, mb: 3, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                      {blog.content}
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
                      <IconButton color="primary" onClick={() => openBlogDialog(blog)} sx={{ bgcolor: 'rgba(144, 202, 249, 0.1)' }}><EditIcon /></IconButton>
                      <IconButton color="error" onClick={() => handleDeleteBlog(blog._id)} sx={{ bgcolor: 'rgba(244, 67, 54, 0.1)' }}><DeleteIcon /></IconButton>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>

            <Dialog open={blogDialog} onClose={() => setBlogDialog(false)} fullWidth maxWidth="md" sx={{ '& .MuiDialog-paper': { border: '1px solid rgba(255,255,255,0.1)' } }}>
              <DialogTitle sx={{ pb: 1, pt: 3, px: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>{editingBlog ? "Edit Article" : "Draft New Article"}</Typography>
              </DialogTitle>
              <DialogContent sx={{ px: 4, pb: 4 }}>
                <TextField fullWidth margin="normal" label="Article Title" value={blogTitle} onChange={(e) => setBlogTitle(e.target.value)} variant="filled" />
                
                <Box sx={{ mt: 3, mb: 2 }}>
                  <Button variant="outlined" component="label" startIcon={<CloudUploadIcon />} fullWidth sx={{ py: 2, borderStyle: 'dashed', borderWidth: 2 }}>
                    Upload Cover Image
                    <input type="file" hidden accept="image/*" onChange={handleImageUpload} />
                  </Button>
                </Box>
                
                {blogImage && (
                  <Box sx={{ mb: 3, display: "flex", justifyContent: "center", bgcolor: 'rgba(0,0,0,0.5)', p: 2, borderRadius: 2 }}>
                    <img src={blogImage} alt="Preview" style={{ maxWidth: '100%', maxHeight: '250px', objectFit: 'contain', borderRadius: '8px' }} />
                  </Box>
                )}
                
                <TextField fullWidth margin="normal" label="Content" multiline rows={12} value={blogContent} onChange={(e) => setBlogContent(e.target.value)} variant="filled" />
              </DialogContent>
              <DialogActions sx={{ px: 4, pb: 3 }}>
                <Button onClick={() => setBlogDialog(false)} color="inherit" sx={{ mr: 1 }}>Cancel</Button>
                <Button onClick={handleSaveBlog} variant="contained" color="primary" sx={{ px: 4 }}>Publish</Button>
              </DialogActions>
            </Dialog>
          </Box>
        )}

        {tab === 1 && (
          <Paper sx={{ p: 6, border: '1px solid rgba(255,255,255,0.05)' }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>CV Link Configuration</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: '600px' }}>
              Provide a direct link to your CV (e.g., Google Drive PDF link). This link will be used when visitors click &quot;Download CV&quot; on the main portfolio page.
            </Typography>
            <TextField fullWidth label="CV URL" value={cvUrl} onChange={(e) => setCvUrl(e.target.value)} margin="normal" variant="filled" />
            {cvSuccess && <Typography color="success.main" variant="body2" sx={{ mt: 2, fontWeight: 'bold' }}>{cvSuccess}</Typography>}
            <Button variant="contained" size="large" sx={{ mt: 4, px: 5, borderRadius: 50 }} onClick={handleUpdateCv}>Save CV Link</Button>
          </Paper>
        )}
      </Container>
    </ThemeProvider>
  );
}
