import { mcPipe } from './mcpipe';

describe('mcPipe', () => {
  const addTwo = (val: number) => {
    return val + 2;
  };

  it('should be defined', () => {
    expect(mcPipe).toBeDefined();
  });

  it('should run functions passed in as arguments', () => {
    const result = mcPipe(addTwo, addTwo, addTwo)(1);
    expect(result).toEqual(7);
  });

  it('should run functions passed in as a pipeline array', () => {
    const pipeline = [addTwo, addTwo, addTwo];
    const result = mcPipe(...pipeline)(1);
    expect(result).toEqual(7);
  });
});
