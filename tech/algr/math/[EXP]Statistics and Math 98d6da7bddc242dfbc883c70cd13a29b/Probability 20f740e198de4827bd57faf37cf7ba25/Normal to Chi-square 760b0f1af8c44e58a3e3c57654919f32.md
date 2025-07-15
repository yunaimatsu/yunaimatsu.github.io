# Normal to Chi-square

The derivation of the probability density function (PDF) for the chi-square distribution can be approached through several methods. Here is a concise derivation for a chi-square distribution with $k$ degrees of freedom:

### Derivation for One Degree of Freedom

1. **Start with a Standard Normal Distribution:**
Let $X$ be a random variable with a standard normal distribution, $X \sim N(0, 1)$. The PDF of $X$ is:
    
    $$
    \varphi(x) = \frac{1}{\sqrt{2\pi}} e^{-x^2/2}
    $$
    
2. **Transformation to Chi-Square Distribution:**
Define $Y = X^2$. We need to find the PDF of $Y$. The cumulative distribution function (CDF) of $Y$ is:
    
    $$
    F_Y(y) = P(Y \leq y) = P(X^2 \leq y) = P(-\sqrt{y} \leq X \leq \sqrt{y})
    $$
    
    The PDF of $Y$ is the derivative of its CDF:
    
    $$
    f_Y(y) = \frac{d}{dy} F_Y(y) = \frac{d}{dy} \left( \int_{-\sqrt{y}}^{\sqrt{y}} \varphi(x) \, dx \right)
    $$
    
    By symmetry and properties of the normal distribution:
    
    $$
    f_Y(y) = \frac{d}{dy} \left( 2 \int_{0}^{\sqrt{y}} \frac{1}{\sqrt{2\pi}} e^{-x^2/2} \, dx \right)
    $$
    
    Using the chain rule:
    
    $$
    f_Y(y) = 2 \cdot \frac{1}{\sqrt{2\pi}} e^{-y/2} \cdot \frac{1}{2\sqrt{y}} = \frac{1}{\sqrt{2\pi y}} e^{-y/2}
    
    $$
    

### Generalization for $k$ Degrees of Freedom

1. **Sum of Squared Standard Normal Variables:**
Let $X_1, X_2, \ldots, X_k$ be independent standard normal random variables. Define:
    
    $$
    Y = \sum_{i=1}^{k} X_i^2
    $$
    
    This is a chi-square distribution with $k$ degrees of freedom, $Y \sim \chi^2(k)$.
    
2. **PDF of Chi-Square Distribution:**
The PDF of $Y$ is given by:
    
    $$
    f_Y(y) = \frac{1}{2^{k/2} \Gamma(k/2)} y^{k/2-1} e^{-y/2}
    $$
    
    where $\Gamma$ is the Gamma function.
    

Citations:
[1] [https://en.wikipedia.org/wiki/Proofs_related_to_chi-squared_distribution](https://en.wikipedia.org/wiki/Proofs_related_to_chi-squared_distribution)
[2] [https://statproofbook.github.io/P/chi2-pdf.html](https://statproofbook.github.io/P/chi2-pdf.html)
[3] [https://math.stackexchange.com/questions/71537/derivation-of-chi-squared-pdf-with-one-degree-of-freedom-from-normal-distributio](https://math.stackexchange.com/questions/71537/derivation-of-chi-squared-pdf-with-one-degree-of-freedom-from-normal-distributio)
[4] [https://www.westga.edu/academics/research/vrc/assets/docs/ChiSquareTest_LectureNotes.pdf](https://www.westga.edu/academics/research/vrc/assets/docs/ChiSquareTest_LectureNotes.pdf)
[5] [https://www.researchgate.net/publication/335206303_Chi-Square_Distribution_New_Derivations_and_Environmental_Application](https://www.researchgate.net/publication/335206303_Chi-Square_Distribution_New_Derivations_and_Environmental_Application)