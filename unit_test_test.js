
import Greet from './Greet'


describe('test Greet()', function () {
    it('should be called', function() {
        expect(Greet('Elizabeth')).toBeCalled();
    });
});

describe('test Greet()', function () {
    it('should greet a name', function () {
      expect(Greet('Elizabeth')).toEqual('Hello, Elizabeth');
    });
    it('should handle null value', function () {
      expect(Greet()).toEqual('Hello there!');
    });
    it('should handle shouting', function () {
      expect(Greet('JOSE')).toEqual('HELLO JOSE!');
    });
    it('should handle 2 names', function () {
      expect(Greet(['Jose', 'Pep'])).toEqual('Hello, Jose, Pep');
    });
    it('should handle multiple names', function () {
      expect(Greet(['Alex', 'Arsene', 'Jose', 'Zidane'])).toEqual(
        'Hello, Alex, Arsene, Jose, Zidane'
      );
    });
  });
  