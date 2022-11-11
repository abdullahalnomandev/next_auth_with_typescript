module.exports = {
  async redirects() {
    return [
      {
        source: "/dashboard",
        destination: "/dashboard",
        permanent: true
      }
    ];
  }
};
