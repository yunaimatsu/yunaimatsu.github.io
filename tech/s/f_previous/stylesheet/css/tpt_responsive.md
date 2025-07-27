---
layout: '@layout/Layout.astro'
---
```css
@media (width <= 300px) {
    * {
        font-family: "Zen Kaku Gothic Antique", sans-serif; 
    }

    .container {
        display: none;
    }
}

@media (300px < width <= 600px) {
    * {
        font-family: "Zen Kaku Gothic Antique", sans-serif; 
    }

    .display {
        display: none;
    }
}

@media (600px < width <= 900px) {
    * {
        font-family: "Zen Kaku Gothic Antique", sans-serif; 
    }
}

@media (900px < width <= 1200px) {
    * {
        font-family: "Zen Kaku Gothic Antique", sans-serif; 
    }    
}

@media (1200px < width) {
    * {
        font-family: "Zen Kaku Gothic Antique", sans-serif; 
    }
}
```