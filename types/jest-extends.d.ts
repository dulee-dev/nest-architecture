declare global {
  namespace jest {
    interface Matchers<R> {
      toBeUuid(): R;
      toBeSimilarDate(date: Date): R;
    }

    interface AsymmetricMatchers {
      toBeUuid(): void;
      toBeSimilarDate(date: Date): void;
    }
  }
}

export {};
