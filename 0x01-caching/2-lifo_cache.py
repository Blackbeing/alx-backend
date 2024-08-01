#!/usr/bin/env python3

"""This module provides class for basic LIFO caching"""

from collections import OrderedDict

BaseCaching = __import__("base_caching").BaseCaching


class LIFOCache(BaseCaching):
    """Class implementing LIFO caching"""

    def __init__(self):
        super().__init__()
        self.cache_data = OrderedDict(self.cache_data)

    def put(self, key, item):
        """
             Adds a key-value pair to the cache.

             Parameters:
             - key: the key for the item to be cached
             - item: the item to be cached

        j"""
        if not (key is None or item is None):
            if len(self.cache_data) >= BaseCaching.MAX_ITEMS:
                d = self.cache_data.popitem(last=True)
                print("DISCARD: {}".format(d[0]))
            self.cache_data[key] = item
            self.cache_data.move_to_end(key, last=True)

    def get(self, key):
        """
        Retrieves the value associated with a given key from the cache_data
        dictionary.

        Parameters:
            - key (Any): The key to search in the cache.

        Returns:
            - value (Any): The value associated with the key or None

        """
        return self.cache_data.get(key, None)
