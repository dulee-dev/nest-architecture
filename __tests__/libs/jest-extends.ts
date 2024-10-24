import { MIN } from '@src/lib/date/date.constant';
import { UUID_REGEXP } from '@src/util/regexp.constant';

expect.extend({
  toBeUuid(received) {
    let pass = false;
    if (typeof received === 'string') {
      pass = !!received.match(UUID_REGEXP);
    }
    return {
      message: () => `expected ${received} to be uuid(regexp)`,
      pass,
    };
  },

  toBeSimilarDate(received, property: Date) {
    if (!(received instanceof Date)) {
      return {
        message: () => `${received} is not Date object`,
        pass: false,
      };
    }

    const diffMs = received.getTime() - property.getTime();
    if (diffMs >= -1 * MIN && diffMs <= MIN) {
      return {
        message: () => `ok`,
        pass: true,
      };
    }

    return {
      message: () => `${received} and ${property} diffMs is over 1Min`,
      pass: false,
    };
  },
});
