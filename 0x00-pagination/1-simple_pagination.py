#!/usr/bin/env python3
"""
This module provides a function that calculates
pagination tuple
"""
import csv
import math
from typing import List


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


class Server:
    """Server class to paginate a database of popular baby names."""

    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset"""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Get page information
        """
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0
        if not self.dataset():
            return []
        start, end = index_range(page, page_size)
        return self.__dataset[start:end]
