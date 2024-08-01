#!/usr/bin/env python3

"""This module provides basic MRU caching class"""

from collections import OrderedDict

BaseCaching = __import__("base_caching").BaseCaching


class MRUCache(BaseCaching):
    """
    A Least Recently Used (LRU) Cache implementation based on
    BaseCaching.
    """

    def __init__(self):
        super().__init__()
        self.cache_data = OrderedDict(self.cache_data)

    def put(self, key, item):
        """Inserts a key-value pair into the cache.

        Args:
            key: The key to be inserted.
            item: The corresponding value to be stored.

        Returns:
            None
        """
        if key is None or item is None:
            return
        if key in self.cache_data:
            self.cache_data[key] = item
        else:
            if len(self.cache_data) >= BaseCaching.MAX_ITEMS:
                k, v = self.cache_data.popitem(last=False)
                print("DISCARD: {}".format(k))
            self.cache_data[key] = item
            self.cache_data.move_to_end(key, last=False)

    def get(self, key):
        """Retrieves the value associated with the given key from the cache.

        Args:
            key: The key whose value is being retrieved.

        Returns:
            The value associated with the key, or None if the key is not in
            thr cache.
        """
        if key in self.cache_data:
            self.cache_data.move_to_end(key, last=False)
            return self.cache_data.get(key, None)
