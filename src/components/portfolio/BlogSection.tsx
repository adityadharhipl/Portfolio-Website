"use client";

import { useEffect, useState } from "react";
import { Container, Grid, Card, CardContent, CardMedia, Typography, Box, CircularProgress, Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";

export function BlogSection() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState<any>(null);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setBlogs(data.data);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section id="blog" className="py-20 lg:py-32 bg-[var(--surface)] text-[var(--foreground)]">
        <div className="section-shell">
          <Typography variant="h2" align="center" sx={{ mb: 6, fontWeight: 'bold' }}>Blog</Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}><CircularProgress /></Box>
        </div>
      </section>
    );
  }

  if (blogs.length === 0) return null;

  return (
    <section id="blog" className="py-20 lg:py-32 bg-[var(--surface)] text-[var(--foreground)]">
      <div className="section-shell">
        <Typography variant="h2" align="center" sx={{ mb: 6, fontWeight: 'black', textTransform: 'uppercase', letterSpacing: '-0.05em', fontSize: { xs: '3rem', md: '4rem' } }}>
          Blog
        </Typography>

        <Grid container spacing={4}>
          {blogs.map((blog) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={blog._id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                  '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 }
                }}
                onClick={() => setSelectedBlog(blog)}
              >
                {blog.imageUrl && (
                  <CardMedia
                    component="img"
                    height="200"
                    image={blog.imageUrl}
                    alt={blog.title}
                  />
                )}
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
                    {blog.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}>
                    {blog.content}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 2 }}>
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Dialog open={!!selectedBlog} onClose={() => setSelectedBlog(null)} maxWidth="md" fullWidth>
          {selectedBlog && (
            <>
              <DialogTitle sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{selectedBlog.title}</DialogTitle>
              <DialogContent dividers>
                {selectedBlog.imageUrl && (
                  <Box sx={{ mb: 3, display: "flex", justifyContent: "center" }}>
                    <img src={selectedBlog.imageUrl} alt={selectedBlog.title} style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain', borderRadius: '8px' }} />
                  </Box>
                )}
                <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap', lineHeight: 1.8 }}>
                  {selectedBlog.content}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 4 }}>
                  Published on {new Date(selectedBlog.createdAt).toLocaleDateString()}
                </Typography>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setSelectedBlog(null)} color="primary">Close</Button>
              </DialogActions>
            </>
          )}
        </Dialog>
      </div>
    </section>
  );
}
