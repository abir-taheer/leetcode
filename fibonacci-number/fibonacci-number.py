class Solution:
    def fib(self, n: int) -> int:
        Phi = (1 + sqrt(5)) / 2;
        phi = (1 - sqrt(5)) / 2;

        return round((Phi ** n - phi ** n) / sqrt(5));