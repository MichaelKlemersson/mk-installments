import app from './app';

const port = process.env.PORT || 5000;

app.listen(port, () => `Server has started on port ${port}`);
