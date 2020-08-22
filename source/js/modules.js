class AsyncLimit {
  constructor(limit) {
    this.limit = Number(limit) || 2;
    this.pool = [];
    this.current = 0;
  }

  async run(fn) {
    if (!fn || typeof fn !== 'function') {
      throw new Error('Function error.');
    }
    if (this.current >= this.limit) {
      await new Promise(resolve => this.pool.push(resolve));
    }
    return this._handleRun(fn);
  }

  async _handleRun(fn) {
    this.current++;
    try {
      return await fn();
    } catch (err) {
      return Promise.reject(err);
    } finally {
      this.current--;
      if (this.pool.length) {
        this.pool[0]();
        this.pool.shift();
      }
    }
  }
}