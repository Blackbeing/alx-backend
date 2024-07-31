#!/usr/bin/env python3
"""
This module provides class for basic caching
"""

BaseCaching = __import__("base_caching").BaseCaching


class BasicCache(BaseCaching):
    """
    A basic caching implementation that stores key-value pairs in a cache.
    """

    def put(self, key, item):
        """
        Adds the provided key-value pair to the cache_data dictionary.

        Parameters:
            - key (Any): The key to be added to the cache.
            - item (Any): value of key

        """
        if not (key is None or item is None):
            self.cache_data[key] = item

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
