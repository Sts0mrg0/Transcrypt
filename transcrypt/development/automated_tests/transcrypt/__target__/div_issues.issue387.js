// Transcrypt'ed from Python, 2018-04-07 19:09:00
var div_issues = {};
import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __conj__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __globals__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __merge__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setProperty__, __setitem__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, complex, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, format, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as __module_div_issues_issue387_test1_test2__ from './div_issues.issue387.test1.test2.js';
__nest__ (div_issues, 'issue387.test1.test2', __module_div_issues_issue387_test1_test2__);
import * as __module_div_issues_issue387_test1__ from './div_issues.issue387.test1.js';
__nest__ (div_issues, 'issue387.test1', __module_div_issues_issue387_test1__);
var __name__ = 'div_issues.issue387';
export var run387 = function (autoTester) {
	autoTester.check (div_issues.issue387.test1.getReport ());
	autoTester.check ('From test: ', div_issues.issue387.test1.test2.C.__module__);
	autoTester.check (__name__);
	var D = __class__ ('D', [object], {
		__module__: __name__,
	});
	autoTester.check ('From test:', D.__module__);
	autoTester.check (D.__name__);
};
export {};

//# sourceMappingURL=div_issues.issue387.map