export class AppError extends Error {
  constructor(
    message: string,
    public code?: string,
    public metadata?: Record<string, unknown>
  ) {
    super(message);
    this.name = 'AppError';
  }
}

export const handleError = (error: unknown) => {
  if (error instanceof AppError) {
    console.error(`[${error.code}] ${error.message}`, error.metadata);
  } else if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error('An unknown error occurred:', error);
  }
};