#!/usr/bin/python3
"""Only sub class of.
Author:Baye cheikh fall

"""

def inherits_from(obj, a_class):
    """A function that returns True if the object is
    an instance of a class that inherited (directly or indirectly)
    from the specified class;
    otherwise False.

    Args:
        obj(any): object of the class
        a_class(type): describes the class
    """
    return isinstance(type(obj), a_class) and (type(obj) is not (a_class))
