#!/usr/bin/env python3
"""
This module provides a function that calculates
pagination tuple
"""


def index_range(page: int, page_size: int) -> tuple:
    """
    Calculate pagination tuple

    Return: Tuple(first_page, last_page)
    """
    if page <= 0:
        page = 1
    first_page = (page - 1) * page_size
    last_page = first_page + page_size
    return (first_page, last_page)
