export const terminate = (
  server,
  options = { coredump: false, timeout: 500 },
) => {
  // Exit function
  const exit = (code) => {
    options.coredump ? process.abort() : process.exit(code);
  };

  return (code, reason) => (err, promise) => {
    if (err && err instanceof Error) {
      // Log error information, use a proper logging library here :)
      console.warn(err.message, err.stack);
    }

    // Attempt a graceful shutdown
    console.debug(`Shutting down server: ${reason}`);
    setTimeout(exit, options.timeout).unref();
  };
};
