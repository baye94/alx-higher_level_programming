#!/usr/bin/python3
"""Exact same object.
Author:Baye cheikh fall

"""


def is_same_class(obj, a_class):
    """A function that returns True if the object is
    exactly an instance of the specified class;
    otherwise False

    Args:
        obj - object of the class
        a_class - the class

    """
    return (type(obj) is a_class )
