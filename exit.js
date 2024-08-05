process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('Mongoose connection closed');
      process.exit(0);
    });
  });