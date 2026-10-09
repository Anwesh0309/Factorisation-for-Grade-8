/* =========================================================================
   FIXED 100-QUESTION BANK (10 WORLDS × 10 QUESTIONS)
   Curriculum-aligned for Grade 7 & Grade 8 Algebra Factorisation
   ========================================================================= */

export const QUESTION_BANK = [
  // WORLD 0: Tile Town (Q1–10: HCF Numerical)
  {
    id: 1, worldId: 0,
    prompt: "Factorise 6x + 9 fully.",
    spokenPrompt: "Factorise 6 x plus 9 fully.",
    hint: "Find the highest common factor of 6 and 9. It is 3!",
    spokenHint: "Find the highest common factor of 6 and 9. It is 3!",
    options: ["3(2x + 3)", "3(2x + 9)", "6(x + 9)", "2(3x + 3)"],
    correctIndex: 0,
    explanation: "The HCF of 6x and 9 is 3. 6x ÷ 3 = 2x and 9 ÷ 3 = 3, so 6x + 9 = 3(2x + 3).",
    rule: "COMMON FACTOR RULE"
  },
  {
    id: 2, worldId: 0,
    prompt: "Factorise 10x + 15 fully.",
    spokenPrompt: "Factorise 10 x plus 15 fully.",
    hint: "The highest common factor of 10 and 15 is 5.",
    spokenHint: "The highest common factor of 10 and 15 is 5.",
    options: ["5(2x + 3)", "5(2x + 15)", "2(5x + 3)", "10(x + 5)"],
    correctIndex: 0,
    explanation: "HCF(10, 15) = 5. Divide each term by 5 to get 5(2x + 3).",
    rule: "COMMON FACTOR RULE"
  },
  {
    id: 3, worldId: 0,
    prompt: "Factorise 12x + 18 fully.",
    spokenPrompt: "Factorise 12 x plus 18 fully.",
    hint: "The highest common factor of 12 and 18 is 6.",
    spokenHint: "The highest common factor of 12 and 18 is 6.",
    options: ["6(2x + 3)", "3(4x + 6)", "2(6x + 9)", "6(2x + 18)"],
    correctIndex: 0,
    explanation: "HCF(12, 18) = 6. 12x + 18 = 6(2x + 3).",
    rule: "COMMON FACTOR RULE"
  },
  {
    id: 4, worldId: 0,
    prompt: "Factorise 14x + 21 fully.",
    spokenPrompt: "Factorise 14 x plus 21 fully.",
    hint: "Look for a factor of both 14 and 21. Try 7!",
    spokenHint: "Look for a factor of both 14 and 21. Try 7!",
    options: ["7(2x + 3)", "7(2x + 21)", "14(x + 3)", "3(4x + 7)"],
    correctIndex: 0,
    explanation: "HCF(14, 21) = 7. 14x + 21 = 7(2x + 3).",
    rule: "COMMON FACTOR RULE"
  },
  {
    id: 5, worldId: 0,
    prompt: "Factorise 8x + 20 fully.",
    spokenPrompt: "Factorise 8 x plus 20 fully.",
    hint: "Both 8 and 20 can be divided by 4.",
    spokenHint: "Both 8 and 20 can be divided by 4.",
    options: ["4(2x + 5)", "2(4x + 10)", "4(2x + 20)", "8(x + 5)"],
    correctIndex: 0,
    explanation: "HCF(8, 20) = 4. 8x + 20 = 4(2x + 5).",
    rule: "COMMON FACTOR RULE"
  },
  {
    id: 6, worldId: 0,
    prompt: "Factorise 15x + 25 fully.",
    spokenPrompt: "Factorise 15 x plus 25 fully.",
    hint: "The number 5 divides both 15 and 25.",
    spokenHint: "The number 5 divides both 15 and 25.",
    options: ["5(3x + 5)", "5(3x + 25)", "15(x + 5)", "3(5x + 5)"],
    correctIndex: 0,
    explanation: "HCF(15, 25) = 5. 15x + 25 = 5(3x + 5).",
    rule: "COMMON FACTOR RULE"
  },
  {
    id: 7, worldId: 0,
    prompt: "Factorise 16x + 24 fully.",
    spokenPrompt: "Factorise 16 x plus 24 fully.",
    hint: "The highest common factor of 16 and 24 is 8.",
    spokenHint: "The highest common factor of 16 and 24 is 8.",
    options: ["8(2x + 3)", "4(4x + 6)", "2(8x + 12)", "8(2x + 24)"],
    correctIndex: 0,
    explanation: "HCF(16, 24) = 8. 16x + 24 = 8(2x + 3).",
    rule: "COMMON FACTOR RULE"
  },
  {
    id: 8, worldId: 0,
    prompt: "Factorise 9x + 27 fully.",
    spokenPrompt: "Factorise 9 x plus 27 fully.",
    hint: "Divide both 9 and 27 by 9.",
    spokenHint: "Divide both 9 and 27 by 9.",
    options: ["9(x + 3)", "3(3x + 9)", "9(x + 27)", "27(x + 1)"],
    correctIndex: 0,
    explanation: "HCF(9, 27) = 9. 9x + 27 = 9(x + 3).",
    rule: "COMMON FACTOR RULE"
  },
  {
    id: 9, worldId: 0,
    prompt: "Factorise 18x + 30 fully.",
    spokenPrompt: "Factorise 18 x plus 30 fully.",
    hint: "The largest number dividing 18 and 30 is 6.",
    spokenHint: "The largest number dividing 18 and 30 is 6.",
    options: ["6(3x + 5)", "3(6x + 10)", "2(9x + 15)", "6(3x + 30)"],
    correctIndex: 0,
    explanation: "HCF(18, 30) = 6. 18x + 30 = 6(3x + 5).",
    rule: "COMMON FACTOR RULE"
  },
  {
    id: 10, worldId: 0,
    prompt: "Factorise 20x + 35 fully.",
    spokenPrompt: "Factorise 20 x plus 35 fully.",
    hint: "Both 20 and 35 end in 0 or 5, so divide by 5.",
    spokenHint: "Both 20 and 35 end in 0 or 5, so divide by 5.",
    options: ["5(4x + 7)", "5(4x + 35)", "10(2x + 7)", "7(4x + 5)"],
    correctIndex: 0,
    explanation: "HCF(20, 35) = 5. 20x + 35 = 5(4x + 7).",
    rule: "COMMON FACTOR RULE"
  },

  // WORLD 1: Bracket Bakery (Q11–20: HCF Variables)
  {
    id: 11, worldId: 1,
    prompt: "Factorise 6x² + 9x fully.",
    spokenPrompt: "Factorise 6 x squared plus 9 x fully.",
    hint: "Both terms share 3 and x, so the HCF is 3x.",
    spokenHint: "Both terms share 3 and x, so the HCF is 3x.",
    options: ["3x(2x + 3)", "3(2x² + 3x)", "x(6x + 9)", "3x(2x + 9)"],
    correctIndex: 0,
    explanation: "HCF of 6x² and 9x is 3x. 6x² ÷ 3x = 2x and 9x ÷ 3x = 3, giving 3x(2x + 3).",
    rule: "COMMON FACTOR RULE"
  },
  {
    id: 12, worldId: 1,
    prompt: "Factorise 8x² + 12x fully.",
    spokenPrompt: "Factorise 8 x squared plus 12 x fully.",
    hint: "Pull out 4x as the common factor.",
    spokenHint: "Pull out 4x as the common factor.",
    options: ["4x(2x + 3)", "4(2x² + 3x)", "2x(4x + 6)", "4x(2x + 12)"],
    correctIndex: 0,
    explanation: "HCF(8x², 12x) = 4x. 8x² + 12x = 4x(2x + 3).",
    rule: "COMMON FACTOR RULE"
  },
  {
    id: 13, worldId: 1,
    prompt: "Factorise 10x² + 15x fully.",
    spokenPrompt: "Factorise 10 x squared plus 15 x fully.",
    hint: "The common factor is 5x.",
    spokenHint: "The common factor is 5x.",
    options: ["5x(2x + 3)", "5(2x² + 3x)", "x(10x + 15)", "5x(2x + 15)"],
    correctIndex: 0,
    explanation: "HCF(10x², 15x) = 5x. 10x² + 15x = 5x(2x + 3).",
    rule: "COMMON FACTOR RULE"
  },
  {
    id: 14, worldId: 1,
    prompt: "Factorise 12x² + 18x fully.",
    spokenPrompt: "Factorise 12 x squared plus 18 x fully.",
    hint: "The HCF of 12x² and 18x is 6x.",
    spokenHint: "The HCF of 12x² and 18x is 6x.",
    options: ["6x(2x + 3)", "6(2x² + 3x)", "3x(4x + 6)", "6x(2x + 18)"],
    correctIndex: 0,
    explanation: "HCF(12x², 18x) = 6x. 12x² + 18x = 6x(2x + 3).",
    rule: "COMMON FACTOR RULE"
  },
  {
    id: 15, worldId: 1,
    prompt: "Factorise 14x² + 21x fully.",
    spokenPrompt: "Factorise 14 x squared plus 21 x fully.",
    hint: "7x is common to both terms.",
    spokenHint: "7x is common to both terms.",
    options: ["7x(2x + 3)", "7(2x² + 3x)", "x(14x + 21)", "7x(2x + 21)"],
    correctIndex: 0,
    explanation: "HCF(14x², 21x) = 7x. 14x² + 21x = 7x(2x + 3).",
    rule: "COMMON FACTOR RULE"
  },
  {
    id: 16, worldId: 1,
    prompt: "Factorise 15x² + 20x fully.",
    spokenPrompt: "Factorise 15 x squared plus 20 x fully.",
    hint: "Divide both terms by 5x.",
    spokenHint: "Divide both terms by 5x.",
    options: ["5x(3x + 4)", "5(3x² + 4x)", "x(15x + 20)", "5x(3x + 20)"],
    correctIndex: 0,
    explanation: "HCF(15x², 20x) = 5x. 15x² + 20x = 5x(3x + 4).",
    rule: "COMMON FACTOR RULE"
  },
  {
    id: 17, worldId: 1,
    prompt: "Factorise 16x² + 24x fully.",
    spokenPrompt: "Factorise 16 x squared plus 24 x fully.",
    hint: "Pull out 8x from both terms.",
    spokenHint: "Pull out 8x from both terms.",
    options: ["8x(2x + 3)", "8(2x² + 3x)", "4x(4x + 6)", "8x(2x + 24)"],
    correctIndex: 0,
    explanation: "HCF(16x², 24x) = 8x. 16x² + 24x = 8x(2x + 3).",
    rule: "COMMON FACTOR RULE"
  },
  {
    id: 18, worldId: 1,
    prompt: "Factorise 18x² + 27x fully.",
    spokenPrompt: "Factorise 18 x squared plus 27 x fully.",
    hint: "The common factor is 9x.",
    spokenHint: "The common factor is 9x.",
    options: ["9x(2x + 3)", "9(2x² + 3x)", "3x(6x + 9)", "9x(2x + 27)"],
    correctIndex: 0,
    explanation: "HCF(18x², 27x) = 9x. 18x² + 27x = 9x(2x + 3).",
    rule: "COMMON FACTOR RULE"
  },
  {
    id: 19, worldId: 1,
    prompt: "Factorise 20x² + 25x fully.",
    spokenPrompt: "Factorise 20 x squared plus 25 x fully.",
    hint: "Divide each term by 5x.",
    spokenHint: "Divide each term by 5x.",
    options: ["5x(4x + 5)", "5(4x² + 5x)", "x(20x + 25)", "5x(4x + 25)"],
    correctIndex: 0,
    explanation: "HCF(20x², 25x) = 5x. 20x² + 25x = 5x(4x + 5).",
    rule: "COMMON FACTOR RULE"
  },
  {
    id: 20, worldId: 1,
    prompt: "Factorise 24x² + 36x fully.",
    spokenPrompt: "Factorise 24 x squared plus 36 x fully.",
    hint: "The HCF is 12x.",
    spokenHint: "The HCF is 12x.",
    options: ["12x(2x + 3)", "12(2x² + 3x)", "6x(4x + 6)", "12x(2x + 36)"],
    correctIndex: 0,
    explanation: "HCF(24x², 36x) = 12x. 24x² + 36x = 12x(2x + 3).",
    rule: "COMMON FACTOR RULE"
  },

  // WORLD 2: Expand Express (Q21–30: Expanding & Checking)
  {
    id: 21, worldId: 2,
    prompt: "Expand (x + 2)(x + 3).",
    spokenPrompt: "Expand x plus 2 times x plus 3.",
    hint: "Multiply out: x squared plus (2 + 3)x plus (2 × 3).",
    spokenHint: "Multiply out: x squared plus 2 plus 3 x plus 2 times 3.",
    options: ["x² + 5x + 6", "x² + 6x + 5", "x² + 5x + 5", "x² + 6x + 6"],
    correctIndex: 0,
    explanation: "(x + 2)(x + 3) = x² + 3x + 2x + 6 = x² + 5x + 6.",
    rule: "EXPAND & CHECK RULE"
  },
  {
    id: 22, worldId: 2,
    prompt: "Expand (x + 3)(x + 4).",
    spokenPrompt: "Expand x plus 3 times x plus 4.",
    hint: "Middle term is 3 + 4 = 7x. Last term is 3 × 4 = 12.",
    spokenHint: "Middle term is 3 plus 4 equals 7 x. Last term is 3 times 4 equals 12.",
    options: ["x² + 7x + 12", "x² + 12x + 7", "x² + 7x + 7", "x² + 12x + 12"],
    correctIndex: 0,
    explanation: "(x + 3)(x + 4) = x² + 4x + 3x + 12 = x² + 7x + 12.",
    rule: "EXPAND & CHECK RULE"
  },
  {
    id: 23, worldId: 2,
    prompt: "Expand (x + 4)(x + 5).",
    spokenPrompt: "Expand x plus 4 times x plus 5.",
    hint: "Middle term: 4 + 5 = 9x. Product: 4 × 5 = 20.",
    spokenHint: "Middle term: 4 plus 5 equals 9 x. Product: 4 times 5 equals 20.",
    options: ["x² + 9x + 20", "x² + 20x + 9", "x² + 9x + 9", "x² + 20x + 20"],
    correctIndex: 0,
    explanation: "(x + 4)(x + 5) = x² + 5x + 4x + 20 = x² + 9x + 20.",
    rule: "EXPAND & CHECK RULE"
  },
  {
    id: 24, worldId: 2,
    prompt: "Expand (x + 2)(x + 5).",
    spokenPrompt: "Expand x plus 2 times x plus 5.",
    hint: "Sum is 2 + 5 = 7. Product is 2 × 5 = 10.",
    spokenHint: "Sum is 2 plus 5 equals 7. Product is 2 times 5 equals 10.",
    options: ["x² + 7x + 10", "x² + 10x + 7", "x² + 7x + 7", "x² + 10x + 10"],
    correctIndex: 0,
    explanation: "(x + 2)(x + 5) = x² + 5x + 2x + 10 = x² + 7x + 10.",
    rule: "EXPAND & CHECK RULE"
  },
  {
    id: 25, worldId: 2,
    prompt: "Expand (x + 3)(x + 5).",
    spokenPrompt: "Expand x plus 3 times x plus 5.",
    hint: "Sum: 3 + 5 = 8. Product: 3 × 5 = 15.",
    spokenHint: "Sum: 3 plus 5 equals 8. Product: 3 times 5 equals 15.",
    options: ["x² + 8x + 15", "x² + 15x + 8", "x² + 8x + 8", "x² + 15x + 15"],
    correctIndex: 0,
    explanation: "(x + 3)(x + 5) = x² + 5x + 3x + 15 = x² + 8x + 15.",
    rule: "EXPAND & CHECK RULE"
  },
  {
    id: 26, worldId: 2,
    prompt: "Expand (x + 1)(x + 6).",
    spokenPrompt: "Expand x plus 1 times x plus 6.",
    hint: "1 + 6 = 7x and 1 × 6 = 6.",
    spokenHint: "1 plus 6 equals 7 x and 1 times 6 equals 6.",
    options: ["x² + 7x + 6", "x² + 6x + 7", "x² + 7x + 7", "x² + 6x + 6"],
    correctIndex: 0,
    explanation: "(x + 1)(x + 6) = x² + 6x + 1x + 6 = x² + 7x + 6.",
    rule: "EXPAND & CHECK RULE"
  },
  {
    id: 27, worldId: 2,
    prompt: "Expand (x + 4)(x + 6).",
    spokenPrompt: "Expand x plus 4 times x plus 6.",
    hint: "Sum = 10 and Product = 24.",
    spokenHint: "Sum equals 10 and Product equals 24.",
    options: ["x² + 10x + 24", "x² + 24x + 10", "x² + 10x + 10", "x² + 24x + 24"],
    correctIndex: 0,
    explanation: "(x + 4)(x + 6) = x² + 6x + 4x + 24 = x² + 10x + 24.",
    rule: "EXPAND & CHECK RULE"
  },
  {
    id: 28, worldId: 2,
    prompt: "Expand (x + 2)(x + 7).",
    spokenPrompt: "Expand x plus 2 times x plus 7.",
    hint: "2 + 7 = 9x and 2 × 7 = 14.",
    spokenHint: "2 plus 7 equals 9 x and 2 times 7 equals 14.",
    options: ["x² + 9x + 14", "x² + 14x + 9", "x² + 9x + 9", "x² + 14x + 14"],
    correctIndex: 0,
    explanation: "(x + 2)(x + 7) = x² + 7x + 2x + 14 = x² + 9x + 14.",
    rule: "EXPAND & CHECK RULE"
  },
  {
    id: 29, worldId: 2,
    prompt: "Expand (x + 3)(x + 6).",
    spokenPrompt: "Expand x plus 3 times x plus 6.",
    hint: "3 + 6 = 9 and 3 × 6 = 18.",
    spokenHint: "3 plus 6 equals 9 and 3 times 6 equals 18.",
    options: ["x² + 9x + 18", "x² + 18x + 9", "x² + 9x + 9", "x² + 18x + 18"],
    correctIndex: 0,
    explanation: "(x + 3)(x + 6) = x² + 6x + 3x + 18 = x² + 9x + 18.",
    rule: "EXPAND & CHECK RULE"
  },
  {
    id: 30, worldId: 2,
    prompt: "Expand (x + 5)(x + 6).",
    spokenPrompt: "Expand x plus 5 times x plus 6.",
    hint: "5 + 6 = 11 and 5 × 6 = 30.",
    spokenHint: "5 plus 6 equals 11 and 5 times 6 equals 30.",
    options: ["x² + 11x + 30", "x² + 30x + 11", "x² + 11x + 11", "x² + 30x + 30"],
    correctIndex: 0,
    explanation: "(x + 5)(x + 6) = x² + 6x + 5x + 30 = x² + 11x + 30.",
    rule: "EXPAND & CHECK RULE"
  },

  // WORLD 3: Pair Palace (Q31–40: Sum & Product Positive)
  {
    id: 31, worldId: 3,
    prompt: "Factorise x² + 5x + 6.",
    spokenPrompt: "Factorise x squared plus 5 x plus 6.",
    hint: "Find two numbers with product 6 and sum 5: 2 and 3.",
    spokenHint: "Find two numbers with product 6 and sum 5: 2 and 3.",
    options: ["(x + 2)(x + 3)", "(x + 1)(x + 6)", "(x + 5)(x + 6)", "(x + 2)(x + 6)"],
    correctIndex: 0,
    explanation: "2 × 3 = 6 and 2 + 3 = 5, so x² + 5x + 6 = (x + 2)(x + 3).",
    rule: "SUM & PRODUCT RULE"
  },
  {
    id: 32, worldId: 3,
    prompt: "Factorise x² + 7x + 12.",
    spokenPrompt: "Factorise x squared plus 7 x plus 12.",
    hint: "Product 12, sum 7: that's 3 and 4!",
    spokenHint: "Product 12, sum 7: that's 3 and 4!",
    options: ["(x + 3)(x + 4)", "(x + 2)(x + 6)", "(x + 1)(x + 12)", "(x + 7)(x + 12)"],
    correctIndex: 0,
    explanation: "3 × 4 = 12 and 3 + 4 = 7, so x² + 7x + 12 = (x + 3)(x + 4).",
    rule: "SUM & PRODUCT RULE"
  },
  {
    id: 33, worldId: 3,
    prompt: "Factorise x² + 9x + 20.",
    spokenPrompt: "Factorise x squared plus 9 x plus 20.",
    hint: "Product 20, sum 9: try 4 and 5.",
    spokenHint: "Product 20, sum 9: try 4 and 5.",
    options: ["(x + 4)(x + 5)", "(x + 2)(x + 10)", "(x + 1)(x + 20)", "(x + 9)(x + 20)"],
    correctIndex: 0,
    explanation: "4 × 5 = 20 and 4 + 5 = 9, so x² + 9x + 20 = (x + 4)(x + 5).",
    rule: "SUM & PRODUCT RULE"
  },
  {
    id: 34, worldId: 3,
    prompt: "Factorise x² + 7x + 10.",
    spokenPrompt: "Factorise x squared plus 7 x plus 10.",
    hint: "Product 10, sum 7: 2 and 5.",
    spokenHint: "Product 10, sum 7: 2 and 5.",
    options: ["(x + 2)(x + 5)", "(x + 1)(x + 10)", "(x + 3)(x + 4)", "(x + 7)(x + 10)"],
    correctIndex: 0,
    explanation: "2 × 5 = 10 and 2 + 5 = 7, so x² + 7x + 10 = (x + 2)(x + 5).",
    rule: "SUM & PRODUCT RULE"
  },
  {
    id: 35, worldId: 3,
    prompt: "Factorise x² + 8x + 15.",
    spokenPrompt: "Factorise x squared plus 8 x plus 15.",
    hint: "Product 15, sum 8: 3 and 5.",
    spokenHint: "Product 15, sum 8: 3 and 5.",
    options: ["(x + 3)(x + 5)", "(x + 1)(x + 15)", "(x + 2)(x + 6)", "(x + 8)(x + 15)"],
    correctIndex: 0,
    explanation: "3 × 5 = 15 and 3 + 5 = 8, so x² + 8x + 15 = (x + 3)(x + 5).",
    rule: "SUM & PRODUCT RULE"
  },
  {
    id: 36, worldId: 3,
    prompt: "Factorise x² + 7x + 6.",
    spokenPrompt: "Factorise x squared plus 7 x plus 6.",
    hint: "Product 6, sum 7: 1 and 6.",
    spokenHint: "Product 6, sum 7: 1 and 6.",
    options: ["(x + 1)(x + 6)", "(x + 2)(x + 3)", "(x + 7)(x + 6)", "(x + 1)(x + 7)"],
    correctIndex: 0,
    explanation: "1 × 6 = 6 and 1 + 6 = 7, so x² + 7x + 6 = (x + 1)(x + 6).",
    rule: "SUM & PRODUCT RULE"
  },
  {
    id: 37, worldId: 3,
    prompt: "Factorise x² + 10x + 24.",
    spokenPrompt: "Factorise x squared plus 10 x plus 24.",
    hint: "Product 24, sum 10: 4 and 6.",
    spokenHint: "Product 24, sum 10: 4 and 6.",
    options: ["(x + 4)(x + 6)", "(x + 3)(x + 8)", "(x + 2)(x + 12)", "(x + 1)(x + 24)"],
    correctIndex: 0,
    explanation: "4 × 6 = 24 and 4 + 6 = 10, so x² + 10x + 24 = (x + 4)(x + 6).",
    rule: "SUM & PRODUCT RULE"
  },
  {
    id: 38, worldId: 3,
    prompt: "Factorise x² + 9x + 14.",
    spokenPrompt: "Factorise x squared plus 9 x plus 14.",
    hint: "Product 14, sum 9: 2 and 7.",
    spokenHint: "Product 14, sum 9: 2 and 7.",
    options: ["(x + 2)(x + 7)", "(x + 1)(x + 14)", "(x + 3)(x + 4)", "(x + 9)(x + 14)"],
    correctIndex: 0,
    explanation: "2 × 7 = 14 and 2 + 7 = 9, so x² + 9x + 14 = (x + 2)(x + 7).",
    rule: "SUM & PRODUCT RULE"
  },
  {
    id: 39, worldId: 3,
    prompt: "Factorise x² + 9x + 18.",
    spokenPrompt: "Factorise x squared plus 9 x plus 18.",
    hint: "Product 18, sum 9: 3 and 6.",
    spokenHint: "Product 18, sum 9: 3 and 6.",
    options: ["(x + 3)(x + 6)", "(x + 2)(x + 9)", "(x + 1)(x + 18)", "(x + 9)(x + 18)"],
    correctIndex: 0,
    explanation: "3 × 6 = 18 and 3 + 6 = 9, so x² + 9x + 18 = (x + 3)(x + 6).",
    rule: "SUM & PRODUCT RULE"
  },
  {
    id: 40, worldId: 3,
    prompt: "Factorise x² + 11x + 30.",
    spokenPrompt: "Factorise x squared plus 11 x plus 30.",
    hint: "Product 30, sum 11: 5 and 6.",
    spokenHint: "Product 30, sum 11: 5 and 6.",
    options: ["(x + 5)(x + 6)", "(x + 3)(x + 10)", "(x + 2)(x + 15)", "(x + 1)(x + 30)"],
    correctIndex: 0,
    explanation: "5 × 6 = 30 and 5 + 6 = 11, so x² + 11x + 30 = (x + 5)(x + 6).",
    rule: "SUM & PRODUCT RULE"
  },

  // WORLD 4: Mirror Mountain (Q41–50: Difference of Two Squares)
  {
    id: 41, worldId: 4,
    prompt: "Factorise x² − 4.",
    spokenPrompt: "Factorise x squared minus 4.",
    hint: "Use a squared minus b squared: (x − 2)(x + 2).",
    spokenHint: "Use a squared minus b squared: x minus 2 times x plus 2.",
    options: ["(x − 2)(x + 2)", "(x − 2)²", "(x + 2)²", "(x − 4)(x + 1)"],
    correctIndex: 0,
    explanation: "x² − 4 = x² − 2² = (x − 2)(x + 2).",
    rule: "a² − b² RULE"
  },
  {
    id: 42, worldId: 4,
    prompt: "Factorise x² − 9.",
    spokenPrompt: "Factorise x squared minus 9.",
    hint: "9 is 3 squared, so (x − 3)(x + 3).",
    spokenHint: "9 is 3 squared, so x minus 3 times x plus 3.",
    options: ["(x − 3)(x + 3)", "(x − 3)²", "(x + 3)²", "(x − 9)(x + 1)"],
    correctIndex: 0,
    explanation: "x² − 9 = x² − 3² = (x − 3)(x + 3).",
    rule: "a² − b² RULE"
  },
  {
    id: 43, worldId: 4,
    prompt: "Factorise x² − 16.",
    spokenPrompt: "Factorise x squared minus 16.",
    hint: "16 is 4 squared, so (x − 4)(x + 4).",
    spokenHint: "16 is 4 squared, so x minus 4 times x plus 4.",
    options: ["(x − 4)(x + 4)", "(x − 4)²", "(x + 4)²", "(x − 16)(x + 1)"],
    correctIndex: 0,
    explanation: "x² − 16 = x² − 4² = (x − 4)(x + 4).",
    rule: "a² − b² RULE"
  },
  {
    id: 44, worldId: 4,
    prompt: "Factorise x² − 25.",
    spokenPrompt: "Factorise x squared minus 25.",
    hint: "25 is 5 squared.",
    spokenHint: "25 is 5 squared.",
    options: ["(x − 5)(x + 5)", "(x − 5)²", "(x + 5)²", "(x − 25)(x + 1)"],
    correctIndex: 0,
    explanation: "x² − 25 = x² − 5² = (x − 5)(x + 5).",
    rule: "a² − b² RULE"
  },
  {
    id: 45, worldId: 4,
    prompt: "Factorise x² − 36.",
    spokenPrompt: "Factorise x squared minus 36.",
    hint: "36 is 6 squared.",
    spokenHint: "36 is 6 squared.",
    options: ["(x − 6)(x + 6)", "(x − 6)²", "(x + 6)²", "(x − 36)(x + 1)"],
    correctIndex: 0,
    explanation: "x² − 36 = x² − 6² = (x − 6)(x + 6).",
    rule: "a² − b² RULE"
  },
  {
    id: 46, worldId: 4,
    prompt: "Factorise x² − 49.",
    spokenPrompt: "Factorise x squared minus 49.",
    hint: "49 is 7 squared.",
    spokenHint: "49 is 7 squared.",
    options: ["(x − 7)(x + 7)", "(x − 7)²", "(x + 7)²", "(x − 49)(x + 1)"],
    correctIndex: 0,
    explanation: "x² − 49 = x² − 7² = (x − 7)(x + 7).",
    rule: "a² − b² RULE"
  },
  {
    id: 47, worldId: 4,
    prompt: "Factorise x² − 64.",
    spokenPrompt: "Factorise x squared minus 64.",
    hint: "64 is 8 squared.",
    spokenHint: "64 is 8 squared.",
    options: ["(x − 8)(x + 8)", "(x − 8)²", "(x + 8)²", "(x − 64)(x + 1)"],
    correctIndex: 0,
    explanation: "x² − 64 = x² − 8² = (x − 8)(x + 8).",
    rule: "a² − b² RULE"
  },
  {
    id: 48, worldId: 4,
    prompt: "Factorise x² − 81.",
    spokenPrompt: "Factorise x squared minus 81.",
    hint: "81 is 9 squared.",
    spokenHint: "81 is 9 squared.",
    options: ["(x − 9)(x + 9)", "(x − 9)²", "(x + 9)²", "(x − 81)(x + 1)"],
    correctIndex: 0,
    explanation: "x² − 81 = x² − 9² = (x − 9)(x + 9).",
    rule: "a² − b² RULE"
  },
  {
    id: 49, worldId: 4,
    prompt: "Factorise x² − 100.",
    spokenPrompt: "Factorise x squared minus 100.",
    hint: "100 is 10 squared.",
    spokenHint: "100 is 10 squared.",
    options: ["(x − 10)(x + 10)", "(x − 10)²", "(x + 10)²", "(x − 100)(x + 1)"],
    correctIndex: 0,
    explanation: "x² − 100 = x² − 10² = (x − 10)(x + 10).",
    rule: "a² − b² RULE"
  },
  {
    id: 50, worldId: 4,
    prompt: "Factorise x² − 121.",
    spokenPrompt: "Factorise x squared minus 121.",
    hint: "121 is 11 squared.",
    spokenHint: "121 is 11 squared.",
    options: ["(x − 11)(x + 11)", "(x − 11)²", "(x + 11)²", "(x − 121)(x + 1)"],
    correctIndex: 0,
    explanation: "x² − 121 = x² − 11² = (x − 11)(x + 11).",
    rule: "a² − b² RULE"
  },

  // WORLD 5: Grouping Galaxy (Q51–60: Grouping 4 Terms)
  {
    id: 51, worldId: 5,
    prompt: "Factorise xy + 3x + 2y + 6.",
    spokenPrompt: "Factorise x y plus 3 x plus 2 y plus 6.",
    hint: "Group into pairs: x(y + 3) + 2(y + 3) = (x + 2)(y + 3).",
    spokenHint: "Group into pairs: x times y plus 3, plus 2 times y plus 3.",
    options: ["(x + 2)(y + 3)", "(x + 3)(y + 2)", "(x + 6)(y + 1)", "(x + 1)(y + 6)"],
    correctIndex: 0,
    explanation: "Group pairs: x(y + 3) + 2(y + 3) = (x + 2)(y + 3).",
    rule: "GROUPING RULE"
  },
  {
    id: 52, worldId: 5,
    prompt: "Factorise xy + 4x + 3y + 12.",
    spokenPrompt: "Factorise x y plus 4 x plus 3 y plus 12.",
    hint: "Group pairs: x(y + 4) + 3(y + 4).",
    spokenHint: "Group pairs: x times y plus 4, plus 3 times y plus 4.",
    options: ["(x + 3)(y + 4)", "(x + 4)(y + 3)", "(x + 2)(y + 6)", "(x + 12)(y + 1)"],
    correctIndex: 0,
    explanation: "x(y + 4) + 3(y + 4) = (x + 3)(y + 4).",
    rule: "GROUPING RULE"
  },
  {
    id: 53, worldId: 5,
    prompt: "Factorise xy + 5x + 2y + 10.",
    spokenPrompt: "Factorise x y plus 5 x plus 2 y plus 10.",
    hint: "Group: x(y + 5) + 2(y + 5).",
    spokenHint: "Group: x times y plus 5, plus 2 times y plus 5.",
    options: ["(x + 2)(y + 5)", "(x + 5)(y + 2)", "(x + 10)(y + 1)", "(x + 1)(y + 10)"],
    correctIndex: 0,
    explanation: "x(y + 5) + 2(y + 5) = (x + 2)(y + 5).",
    rule: "GROUPING RULE"
  },
  {
    id: 54, worldId: 5,
    prompt: "Factorise xy + 6x + 3y + 18.",
    spokenPrompt: "Factorise x y plus 6 x plus 3 y plus 18.",
    hint: "Group: x(y + 6) + 3(y + 6).",
    spokenHint: "Group: x times y plus 6, plus 3 times y plus 6.",
    options: ["(x + 3)(y + 6)", "(x + 6)(y + 3)", "(x + 2)(y + 9)", "(x + 18)(y + 1)"],
    correctIndex: 0,
    explanation: "x(y + 6) + 3(y + 6) = (x + 3)(y + 6).",
    rule: "GROUPING RULE"
  },
  {
    id: 55, worldId: 5,
    prompt: "Factorise xy + 4x + 2y + 8.",
    spokenPrompt: "Factorise x y plus 4 x plus 2 y plus 8.",
    hint: "Group: x(y + 4) + 2(y + 4).",
    spokenHint: "Group: x times y plus 4, plus 2 times y plus 4.",
    options: ["(x + 2)(y + 4)", "(x + 4)(y + 2)", "(x + 8)(y + 1)", "(x + 1)(y + 8)"],
    correctIndex: 0,
    explanation: "x(y + 4) + 2(y + 4) = (x + 2)(y + 4).",
    rule: "GROUPING RULE"
  },
  {
    id: 56, worldId: 5,
    prompt: "Factorise xy + 7x + 3y + 21.",
    spokenPrompt: "Factorise x y plus 7 x plus 3 y plus 21.",
    hint: "Group: x(y + 7) + 3(y + 7).",
    spokenHint: "Group: x times y plus 7, plus 3 times y plus 7.",
    options: ["(x + 3)(y + 7)", "(x + 7)(y + 3)", "(x + 21)(y + 1)", "(x + 1)(y + 21)"],
    correctIndex: 0,
    explanation: "x(y + 7) + 3(y + 7) = (x + 3)(y + 7).",
    rule: "GROUPING RULE"
  },
  {
    id: 57, worldId: 5,
    prompt: "Factorise xy + 5x + 4y + 20.",
    spokenPrompt: "Factorise x y plus 5 x plus 4 y plus 20.",
    hint: "Group: x(y + 5) + 4(y + 5).",
    spokenHint: "Group: x times y plus 5, plus 4 times y plus 5.",
    options: ["(x + 4)(y + 5)", "(x + 5)(y + 4)", "(x + 2)(y + 10)", "(x + 20)(y + 1)"],
    correctIndex: 0,
    explanation: "x(y + 5) + 4(y + 5) = (x + 4)(y + 5).",
    rule: "GROUPING RULE"
  },
  {
    id: 58, worldId: 5,
    prompt: "Factorise xy + 6x + 5y + 30.",
    spokenPrompt: "Factorise x y plus 6 x plus 5 y plus 30.",
    hint: "Group: x(y + 6) + 5(y + 6).",
    spokenHint: "Group: x times y plus 6, plus 5 times y plus 6.",
    options: ["(x + 5)(y + 6)", "(x + 6)(y + 5)", "(x + 3)(y + 10)", "(x + 30)(y + 1)"],
    correctIndex: 0,
    explanation: "x(y + 6) + 5(y + 6) = (x + 5)(y + 6).",
    rule: "GROUPING RULE"
  },
  {
    id: 59, worldId: 5,
    prompt: "Factorise xy + 8x + 2y + 16.",
    spokenPrompt: "Factorise x y plus 8 x plus 2 y plus 16.",
    hint: "Group: x(y + 8) + 2(y + 8).",
    spokenHint: "Group: x times y plus 8, plus 2 times y plus 8.",
    options: ["(x + 2)(y + 8)", "(x + 8)(y + 2)", "(x + 4)(y + 4)", "(x + 16)(y + 1)"],
    correctIndex: 0,
    explanation: "x(y + 8) + 2(y + 8) = (x + 2)(y + 8).",
    rule: "GROUPING RULE"
  },
  {
    id: 60, worldId: 5,
    prompt: "Factorise xy + 9x + 3y + 27.",
    spokenPrompt: "Factorise x y plus 9 x plus 3 y plus 27.",
    hint: "Group: x(y + 9) + 3(y + 9).",
    spokenHint: "Group: x times y plus 9, plus 3 times y plus 9.",
    options: ["(x + 3)(y + 9)", "(x + 9)(y + 3)", "(x + 27)(y + 1)", "(x + 1)(y + 27)"],
    correctIndex: 0,
    explanation: "x(y + 9) + 3(y + 9) = (x + 3)(y + 9).",
    rule: "GROUPING RULE"
  },

  // WORLD 6: Negative Nest (Q61–70: Negative Trinomials)
  {
    id: 61, worldId: 6,
    prompt: "Factorise x² + x − 6.",
    spokenPrompt: "Factorise x squared plus x minus 6.",
    hint: "Product −6, sum +1: that's −2 and +3.",
    spokenHint: "Product minus 6, sum plus 1: that's minus 2 and plus 3.",
    options: ["(x − 2)(x + 3)", "(x + 2)(x − 3)", "(x − 1)(x + 6)", "(x + 1)(x − 6)"],
    correctIndex: 0,
    explanation: "(−2) × 3 = −6 and (−2) + 3 = 1. So x² + x − 6 = (x − 2)(x + 3).",
    rule: "SUM & PRODUCT RULE"
  },
  {
    id: 62, worldId: 6,
    prompt: "Factorise x² + x − 12.",
    spokenPrompt: "Factorise x squared plus x minus 12.",
    hint: "Product −12, sum +1: −3 and +4.",
    spokenHint: "Product minus 12, sum plus 1: minus 3 and plus 4.",
    options: ["(x − 3)(x + 4)", "(x + 3)(x − 4)", "(x − 2)(x + 6)", "(x + 2)(x − 6)"],
    correctIndex: 0,
    explanation: "(−3) × 4 = −12 and (−3) + 4 = 1. So (x − 3)(x + 4).",
    rule: "SUM & PRODUCT RULE"
  },
  {
    id: 63, worldId: 6,
    prompt: "Factorise x² − x − 6.",
    spokenPrompt: "Factorise x squared minus x minus 6.",
    hint: "Product −6, sum −1: +2 and −3.",
    spokenHint: "Product minus 6, sum minus 1: plus 2 and minus 3.",
    options: ["(x + 2)(x − 3)", "(x − 2)(x + 3)", "(x − 1)(x + 6)", "(x + 1)(x − 6)"],
    correctIndex: 0,
    explanation: "2 × (−3) = −6 and 2 + (−3) = −1. So (x + 2)(x − 3).",
    rule: "SUM & PRODUCT RULE"
  },
  {
    id: 64, worldId: 6,
    prompt: "Factorise x² − 2x − 8.",
    spokenPrompt: "Factorise x squared minus 2 x minus 8.",
    hint: "Product −8, sum −2: +2 and −4.",
    spokenHint: "Product minus 8, sum minus 2: plus 2 and minus 4.",
    options: ["(x + 2)(x − 4)", "(x − 2)(x + 4)", "(x − 1)(x + 8)", "(x + 1)(x − 8)"],
    correctIndex: 0,
    explanation: "2 × (−4) = −8 and 2 + (−4) = −2. So (x + 2)(x − 4).",
    rule: "SUM & PRODUCT RULE"
  },
  {
    id: 65, worldId: 6,
    prompt: "Factorise x² + 2x − 15.",
    spokenPrompt: "Factorise x squared plus 2 x minus 15.",
    hint: "Product −15, sum +2: −3 and +5.",
    spokenHint: "Product minus 15, sum plus 2: minus 3 and plus 5.",
    options: ["(x − 3)(x + 5)", "(x + 3)(x − 5)", "(x − 1)(x + 15)", "(x + 1)(x − 15)"],
    correctIndex: 0,
    explanation: "(−3) × 5 = −15 and (−3) + 5 = 2. So (x − 3)(x + 5).",
    rule: "SUM & PRODUCT RULE"
  },
  {
    id: 66, worldId: 6,
    prompt: "Factorise x² − 3x − 10.",
    spokenPrompt: "Factorise x squared minus 3 x minus 10.",
    hint: "Product −10, sum −3: +2 and −5.",
    spokenHint: "Product minus 10, sum minus 3: plus 2 and minus 5.",
    options: ["(x + 2)(x − 5)", "(x − 2)(x + 5)", "(x − 1)(x + 10)", "(x + 1)(x − 10)"],
    correctIndex: 0,
    explanation: "2 × (−5) = −10 and 2 + (−5) = −3. So (x + 2)(x − 5).",
    rule: "SUM & PRODUCT RULE"
  },
  {
    id: 67, worldId: 6,
    prompt: "Factorise x² + 3x − 18.",
    spokenPrompt: "Factorise x squared plus 3 x minus 18.",
    hint: "Product −18, sum +3: −3 and +6.",
    spokenHint: "Product minus 18, sum plus 3: minus 3 and plus 6.",
    options: ["(x − 3)(x + 6)", "(x + 3)(x − 6)", "(x − 2)(x + 9)", "(x + 2)(x − 9)"],
    correctIndex: 0,
    explanation: "(−3) × 6 = −18 and (−3) + 6 = 3. So (x − 3)(x + 6).",
    rule: "SUM & PRODUCT RULE"
  },
  {
    id: 68, worldId: 6,
    prompt: "Factorise x² − 4x − 12.",
    spokenPrompt: "Factorise x squared minus 4 x minus 12.",
    hint: "Product −12, sum −4: +2 and −6.",
    spokenHint: "Product minus 12, sum minus 4: plus 2 and minus 6.",
    options: ["(x + 2)(x − 6)", "(x − 2)(x + 6)", "(x − 3)(x + 4)", "(x + 3)(x − 4)"],
    correctIndex: 0,
    explanation: "2 × (−6) = −12 and 2 + (−6) = −4. So (x + 2)(x − 6).",
    rule: "SUM & PRODUCT RULE"
  },
  {
    id: 69, worldId: 6,
    prompt: "Factorise x² + 5x − 14.",
    spokenPrompt: "Factorise x squared plus 5 x minus 14.",
    hint: "Product −14, sum +5: −2 and +7.",
    spokenHint: "Product minus 14, sum plus 5: minus 2 and plus 7.",
    options: ["(x − 2)(x + 7)", "(x + 2)(x − 7)", "(x − 1)(x + 14)", "(x + 1)(x − 14)"],
    correctIndex: 0,
    explanation: "(−2) × 7 = −14 and (−2) + 7 = 5. So (x − 2)(x + 7).",
    rule: "SUM & PRODUCT RULE"
  },
  {
    id: 70, worldId: 6,
    prompt: "Factorise x² − 5x − 24.",
    spokenPrompt: "Factorise x squared minus 5 x minus 24.",
    hint: "Product −24, sum −5: +3 and −8.",
    spokenHint: "Product minus 24, sum minus 5: plus 3 and minus 8.",
    options: ["(x + 3)(x − 8)", "(x − 3)(x + 8)", "(x − 2)(x + 12)", "(x + 2)(x − 12)"],
    correctIndex: 0,
    explanation: "3 × (−8) = −24 and 3 + (−8) = −5. So (x + 3)(x − 8).",
    rule: "SUM & PRODUCT RULE"
  },

  // WORLD 7: Square Plaza (Q71–80: Perfect Square Trinomials)
  {
    id: 71, worldId: 7,
    prompt: "Factorise x² + 4x + 4.",
    spokenPrompt: "Factorise x squared plus 4 x plus 4.",
    hint: "Both numbers are 2: (x + 2)².",
    spokenHint: "Both numbers are 2: x plus 2 squared.",
    options: ["(x + 2)²", "(x + 4)²", "(x − 2)²", "(x + 1)(x + 4)"],
    correctIndex: 0,
    explanation: "x² + 2(2)x + 2² = (x + 2)².",
    rule: "PERFECT SQUARE RULE"
  },
  {
    id: 72, worldId: 7,
    prompt: "Factorise x² + 6x + 9.",
    spokenPrompt: "Factorise x squared plus 6 x plus 9.",
    hint: "3 + 3 = 6 and 3 × 3 = 9, so (x + 3)².",
    spokenHint: "3 plus 3 equals 6 and 3 times 3 equals 9, so x plus 3 squared.",
    options: ["(x + 3)²", "(x + 9)²", "(x − 3)²", "(x + 1)(x + 9)"],
    correctIndex: 0,
    explanation: "x² + 2(3)x + 3² = (x + 3)².",
    rule: "PERFECT SQUARE RULE"
  },
  {
    id: 73, worldId: 7,
    prompt: "Factorise x² + 8x + 16.",
    spokenPrompt: "Factorise x squared plus 8 x plus 16.",
    hint: "4 + 4 = 8 and 4 × 4 = 16, so (x + 4)².",
    spokenHint: "4 plus 4 equals 8 and 4 times 4 equals 16, so x plus 4 squared.",
    options: ["(x + 4)²", "(x + 8)²", "(x − 4)²", "(x + 2)(x + 8)"],
    correctIndex: 0,
    explanation: "x² + 2(4)x + 4² = (x + 4)².",
    rule: "PERFECT SQUARE RULE"
  },
  {
    id: 74, worldId: 7,
    prompt: "Factorise x² + 10x + 25.",
    spokenPrompt: "Factorise x squared plus 10 x plus 25.",
    hint: "5 + 5 = 10 and 5 × 5 = 25, so (x + 5)².",
    spokenHint: "5 plus 5 equals 10 and 5 times 5 equals 25, so x plus 5 squared.",
    options: ["(x + 5)²", "(x + 10)²", "(x − 5)²", "(x + 1)(x + 25)"],
    correctIndex: 0,
    explanation: "x² + 2(5)x + 5² = (x + 5)².",
    rule: "PERFECT SQUARE RULE"
  },
  {
    id: 75, worldId: 7,
    prompt: "Factorise x² + 12x + 36.",
    spokenPrompt: "Factorise x squared plus 12 x plus 36.",
    hint: "6 + 6 = 12 and 6 × 6 = 36, so (x + 6)².",
    spokenHint: "6 plus 6 equals 12 and 6 times 6 equals 36, so x plus 6 squared.",
    options: ["(x + 6)²", "(x + 12)²", "(x − 6)²", "(x + 4)(x + 9)"],
    correctIndex: 0,
    explanation: "x² + 2(6)x + 6² = (x + 6)².",
    rule: "PERFECT SQUARE RULE"
  },
  {
    id: 76, worldId: 7,
    prompt: "Factorise x² − 4x + 4.",
    spokenPrompt: "Factorise x squared minus 4 x plus 4.",
    hint: "Negative middle term: (x − 2)².",
    spokenHint: "Negative middle term: x minus 2 squared.",
    options: ["(x − 2)²", "(x + 2)²", "(x − 4)²", "(x − 1)(x − 4)"],
    correctIndex: 0,
    explanation: "x² − 2(2)x + 2² = (x − 2)².",
    rule: "PERFECT SQUARE RULE"
  },
  {
    id: 77, worldId: 7,
    prompt: "Factorise x² − 6x + 9.",
    spokenPrompt: "Factorise x squared minus 6 x plus 9.",
    hint: "(−3) + (−3) = −6 and (−3)² = 9, so (x − 3)².",
    spokenHint: "minus 3 plus minus 3 equals minus 6 and minus 3 squared equals 9, so x minus 3 squared.",
    options: ["(x − 3)²", "(x + 3)²", "(x − 9)²", "(x − 1)(x − 9)"],
    correctIndex: 0,
    explanation: "x² − 2(3)x + 3² = (x − 3)².",
    rule: "PERFECT SQUARE RULE"
  },
  {
    id: 78, worldId: 7,
    prompt: "Factorise x² − 8x + 16.",
    spokenPrompt: "Factorise x squared minus 8 x plus 16.",
    hint: "(−4) + (−4) = −8, so (x − 4)².",
    spokenHint: "minus 4 plus minus 4 equals minus 8, so x minus 4 squared.",
    options: ["(x − 4)²", "(x + 4)²", "(x − 8)²", "(x − 2)(x − 8)"],
    correctIndex: 0,
    explanation: "x² − 2(4)x + 4² = (x − 4)².",
    rule: "PERFECT SQUARE RULE"
  },
  {
    id: 79, worldId: 7,
    prompt: "Factorise x² − 10x + 25.",
    spokenPrompt: "Factorise x squared minus 10 x plus 25.",
    hint: "(−5) + (−5) = −10, so (x − 5)².",
    spokenHint: "minus 5 plus minus 5 equals minus 10, so x minus 5 squared.",
    options: ["(x − 5)²", "(x + 5)²", "(x − 10)²", "(x − 1)(x − 25)"],
    correctIndex: 0,
    explanation: "x² − 2(5)x + 5² = (x − 5)².",
    rule: "PERFECT SQUARE RULE"
  },
  {
    id: 80, worldId: 7,
    prompt: "Factorise x² − 12x + 36.",
    spokenPrompt: "Factorise x squared minus 12 x plus 36.",
    hint: "(−6) + (−6) = −12, so (x − 6)².",
    spokenHint: "minus 6 plus minus 6 equals minus 12, so x minus 6 squared.",
    options: ["(x − 6)²", "(x + 6)²", "(x − 12)²", "(x − 4)(x − 9)"],
    correctIndex: 0,
    explanation: "x² − 2(6)x + 6² = (x − 6)².",
    rule: "PERFECT SQUARE RULE"
  },

  // WORLD 8: Factor Canyon (Q81–90: Coefficients & HCF in Squares)
  {
    id: 81, worldId: 8,
    prompt: "Factorise 4x² − 9.",
    spokenPrompt: "Factorise 4 x squared minus 9.",
    hint: "(2x)² − 3² = (2x − 3)(2x + 3).",
    spokenHint: "2 x squared minus 3 squared equals 2 x minus 3 times 2 x plus 3.",
    options: ["(2x − 3)(2x + 3)", "(4x − 3)(x + 3)", "(2x − 3)²", "(4x − 9)(x + 1)"],
    correctIndex: 0,
    explanation: "(2x)² − 3² = (2x − 3)(2x + 3).",
    rule: "a² − b² RULE"
  },
  {
    id: 82, worldId: 8,
    prompt: "Factorise 9x² − 16.",
    spokenPrompt: "Factorise 9 x squared minus 16.",
    hint: "(3x)² − 4² = (3x − 4)(3x + 4).",
    spokenHint: "3 x squared minus 4 squared equals 3 x minus 4 times 3 x plus 4.",
    options: ["(3x − 4)(3x + 4)", "(9x − 4)(x + 4)", "(3x − 4)²", "(9x − 16)(x + 1)"],
    correctIndex: 0,
    explanation: "(3x)² − 4² = (3x − 4)(3x + 4).",
    rule: "a² − b² RULE"
  },
  {
    id: 83, worldId: 8,
    prompt: "Factorise 16x² − 25.",
    spokenPrompt: "Factorise 16 x squared minus 25.",
    hint: "(4x)² − 5² = (4x − 5)(4x + 5).",
    spokenHint: "4 x squared minus 5 squared equals 4 x minus 5 times 4 x plus 5.",
    options: ["(4x − 5)(4x + 5)", "(16x − 5)(x + 5)", "(4x − 5)²", "(16x − 25)(x + 1)"],
    correctIndex: 0,
    explanation: "(4x)² − 5² = (4x − 5)(4x + 5).",
    rule: "a² − b² RULE"
  },
  {
    id: 84, worldId: 8,
    prompt: "Factorise 25x² − 36.",
    spokenPrompt: "Factorise 25 x squared minus 36.",
    hint: "(5x)² − 6² = (5x − 6)(5x + 6).",
    spokenHint: "5 x squared minus 6 squared equals 5 x minus 6 times 5 x plus 6.",
    options: ["(5x − 6)(5x + 6)", "(25x − 6)(x + 6)", "(5x − 6)²", "(25x − 36)(x + 1)"],
    correctIndex: 0,
    explanation: "(5x)² − 6² = (5x − 6)(5x + 6).",
    rule: "a² − b² RULE"
  },
  {
    id: 85, worldId: 8,
    prompt: "Factorise 2x² − 8 fully.",
    spokenPrompt: "Factorise 2 x squared minus 8 fully.",
    hint: "Pull out HCF 2 first: 2(x² − 4) = 2(x − 2)(x + 2).",
    spokenHint: "Pull out HCF 2 first: 2 times x squared minus 4 equals 2 times x minus 2 times x plus 2.",
    options: ["2(x − 2)(x + 2)", "2(x² − 4)", "(2x − 4)(x + 2)", "(2x − 2)(x + 4)"],
    correctIndex: 0,
    explanation: "2(x² − 4) = 2(x − 2)(x + 2).",
    rule: "a² − b² RULE"
  },
  {
    id: 86, worldId: 8,
    prompt: "Factorise 3x² − 27 fully.",
    spokenPrompt: "Factorise 3 x squared minus 27 fully.",
    hint: "Take out 3: 3(x² − 9) = 3(x − 3)(x + 3).",
    spokenHint: "Take out 3: 3 times x squared minus 9 equals 3 times x minus 3 times x plus 3.",
    options: ["3(x − 3)(x + 3)", "3(x² − 9)", "(3x − 9)(x + 3)", "(3x − 3)(x + 9)"],
    correctIndex: 0,
    explanation: "3(x² − 9) = 3(x − 3)(x + 3).",
    rule: "a² − b² RULE"
  },
  {
    id: 87, worldId: 8,
    prompt: "Factorise 5x² − 20 fully.",
    spokenPrompt: "Factorise 5 x squared minus 20 fully.",
    hint: "Take out 5: 5(x² − 4) = 5(x − 2)(x + 2).",
    spokenHint: "Take out 5: 5 times x squared minus 4 equals 5 times x minus 2 times x plus 2.",
    options: ["5(x − 2)(x + 2)", "5(x² − 4)", "(5x − 10)(x + 2)", "(5x − 2)(x + 10)"],
    correctIndex: 0,
    explanation: "5(x² − 4) = 5(x − 2)(x + 2).",
    rule: "a² − b² RULE"
  },
  {
    id: 88, worldId: 8,
    prompt: "Factorise 3x² − 12 fully.",
    spokenPrompt: "Factorise 3 x squared minus 12 fully.",
    hint: "3(x² − 4) = 3(x − 2)(x + 2).",
    spokenHint: "3 times x squared minus 4 equals 3 times x minus 2 times x plus 2.",
    options: ["3(x − 2)(x + 2)", "3(x² − 4)", "(3x − 6)(x + 2)", "(3x − 2)(x + 6)"],
    correctIndex: 0,
    explanation: "3(x² − 4) = 3(x − 2)(x + 2).",
    rule: "a² − b² RULE"
  },
  {
    id: 89, worldId: 8,
    prompt: "Factorise 4x² − 100 fully.",
    spokenPrompt: "Factorise 4 x squared minus 100 fully.",
    hint: "Take out 4: 4(x² − 25) = 4(x − 5)(x + 5).",
    spokenHint: "Take out 4: 4 times x squared minus 25 equals 4 times x minus 5 times x plus 5.",
    options: ["4(x − 5)(x + 5)", "4(x² − 25)", "(2x − 10)(2x + 10)", "(4x − 20)(x + 5)"],
    correctIndex: 0,
    explanation: "4(x² − 25) = 4(x − 5)(x + 5).",
    rule: "a² − b² RULE"
  },
  {
    id: 90, worldId: 8,
    prompt: "Factorise 2x² − 18 fully.",
    spokenPrompt: "Factorise 2 x squared minus 18 fully.",
    hint: "2(x² − 9) = 2(x − 3)(x + 3).",
    spokenHint: "2 times x squared minus 9 equals 2 times x minus 3 times x plus 3.",
    options: ["2(x − 3)(x + 3)", "2(x² − 9)", "(2x − 6)(x + 3)", "(2x − 3)(x + 6)"],
    correctIndex: 0,
    explanation: "2(x² − 9) = 2(x − 3)(x + 3).",
    rule: "a² − b² RULE"
  },

  // WORLD 9: Factor Citadel (Q91–100: Mastery Quest Mixed)
  {
    id: 91, worldId: 9,
    prompt: "Factorise x² + 13x + 42.",
    spokenPrompt: "Factorise x squared plus 13 x plus 42.",
    hint: "Product 42, sum 13: 6 and 7.",
    spokenHint: "Product 42, sum 13: 6 and 7.",
    options: ["(x + 6)(x + 7)", "(x + 2)(x + 21)", "(x + 3)(x + 14)", "(x + 1)(x + 42)"],
    correctIndex: 0,
    explanation: "6 × 7 = 42 and 6 + 7 = 13, so (x + 6)(x + 7).",
    rule: "SUM & PRODUCT RULE"
  },
  {
    id: 92, worldId: 9,
    prompt: "Factorise x² − 7x + 12.",
    spokenPrompt: "Factorise x squared minus 7 x plus 12.",
    hint: "Both numbers are negative: −3 and −4.",
    spokenHint: "Both numbers are negative: minus 3 and minus 4.",
    options: ["(x − 3)(x − 4)", "(x + 3)(x + 4)", "(x − 2)(x − 6)", "(x − 1)(x − 12)"],
    correctIndex: 0,
    explanation: "(−3) × (−4) = 12 and (−3) + (−4) = −7, so (x − 3)(x − 4).",
    rule: "SUM & PRODUCT RULE"
  },
  {
    id: 93, worldId: 9,
    prompt: "Factorise x² − 9x + 20.",
    spokenPrompt: "Factorise x squared minus 9 x plus 20.",
    hint: "Product +20, sum −9: −4 and −5.",
    spokenHint: "Product plus 20, sum minus 9: minus 4 and minus 5.",
    options: ["(x − 4)(x − 5)", "(x + 4)(x + 5)", "(x − 2)(x − 10)", "(x − 1)(x − 20)"],
    correctIndex: 0,
    explanation: "(−4) × (−5) = 20 and (−4) + (−5) = −9, so (x − 4)(x − 5).",
    rule: "SUM & PRODUCT RULE"
  },
  {
    id: 94, worldId: 9,
    prompt: "Factorise 2x² + 6x + 4 fully.",
    spokenPrompt: "Factorise 2 x squared plus 6 x plus 4 fully.",
    hint: "Take out 2 first: 2(x² + 3x + 2) = 2(x + 1)(x + 2).",
    spokenHint: "Take out 2 first: 2 times x squared plus 3 x plus 2 equals 2 times x plus 1 times x plus 2.",
    options: ["2(x + 1)(x + 2)", "2(x + 3)(x + 4)", "(2x + 2)(x + 2)", "(2x + 4)(x + 1)"],
    correctIndex: 0,
    explanation: "2(x² + 3x + 2) = 2(x + 1)(x + 2).",
    rule: "CROSS-CHECK RULE"
  },
  {
    id: 95, worldId: 9,
    prompt: "Factorise 3x² + 9x + 6 fully.",
    spokenPrompt: "Factorise 3 x squared plus 9 x plus 6 fully.",
    hint: "Take out 3: 3(x² + 3x + 2) = 3(x + 1)(x + 2).",
    spokenHint: "Take out 3: 3 times x squared plus 3 x plus 2 equals 3 times x plus 1 times x plus 2.",
    options: ["3(x + 1)(x + 2)", "3(x + 3)(x + 2)", "(3x + 3)(x + 2)", "(3x + 6)(x + 1)"],
    correctIndex: 0,
    explanation: "3(x² + 3x + 2) = 3(x + 1)(x + 2).",
    rule: "CROSS-CHECK RULE"
  },
  {
    id: 96, worldId: 9,
    prompt: "Factorise 4x² − 64 fully.",
    spokenPrompt: "Factorise 4 x squared minus 64 fully.",
    hint: "Take out 4: 4(x² − 16) = 4(x − 4)(x + 4).",
    spokenHint: "Take out 4: 4 times x squared minus 16 equals 4 times x minus 4 times x plus 4.",
    options: ["4(x − 4)(x + 4)", "4(x² − 16)", "(2x − 8)(2x + 8)", "(4x − 16)(x + 4)"],
    correctIndex: 0,
    explanation: "4(x² − 16) = 4(x − 4)(x + 4).",
    rule: "a² − b² RULE"
  },
  {
    id: 97, worldId: 9,
    prompt: "Factorise x² − 14x + 49.",
    spokenPrompt: "Factorise x squared minus 14 x plus 49.",
    hint: "(−7) + (−7) = −14, so (x − 7)².",
    spokenHint: "minus 7 plus minus 7 equals minus 14, so x minus 7 squared.",
    options: ["(x − 7)²", "(x + 7)²", "(x − 7)(x + 7)", "(x − 1)(x − 49)"],
    correctIndex: 0,
    explanation: "x² − 2(7)x + 7² = (x − 7)².",
    rule: "PERFECT SQUARE RULE"
  },
  {
    id: 98, worldId: 9,
    prompt: "Factorise xy + 10x + 2y + 20.",
    spokenPrompt: "Factorise x y plus 10 x plus 2 y plus 20.",
    hint: "Group: x(y + 10) + 2(y + 10) = (x + 2)(y + 10).",
    spokenHint: "Group: x times y plus 10, plus 2 times y plus 10.",
    options: ["(x + 2)(y + 10)", "(x + 10)(y + 2)", "(x + 4)(y + 5)", "(x + 20)(y + 1)"],
    correctIndex: 0,
    explanation: "x(y + 10) + 2(y + 10) = (x + 2)(y + 10).",
    rule: "GROUPING RULE"
  },
  {
    id: 99, worldId: 9,
    prompt: "Factorise x² + 2x − 24.",
    spokenPrompt: "Factorise x squared plus 2 x minus 24.",
    hint: "Product −24, sum +2: −4 and +6.",
    spokenHint: "Product minus 24, sum plus 2: minus 4 and plus 6.",
    options: ["(x − 4)(x + 6)", "(x + 4)(x − 6)", "(x − 3)(x + 8)", "(x + 3)(x − 8)"],
    correctIndex: 0,
    explanation: "(−4) × 6 = −24 and (−4) + 6 = 2. So (x − 4)(x + 6).",
    rule: "SUM & PRODUCT RULE"
  },
  {
    id: 100, worldId: 9,
    prompt: "Factorise 5x² + 25x + 30 fully.",
    spokenPrompt: "Factorise 5 x squared plus 25 x plus 30 fully.",
    hint: "Take out 5 first: 5(x² + 5x + 6) = 5(x + 2)(x + 3).",
    spokenHint: "Take out 5 first: 5 times x squared plus 5 x plus 6 equals 5 times x plus 2 times x plus 3.",
    options: ["5(x + 2)(x + 3)", "5(x + 1)(x + 6)", "(5x + 10)(x + 3)", "(5x + 15)(x + 2)"],
    correctIndex: 0,
    explanation: "5(x² + 5x + 6) = 5(x + 2)(x + 3).",
    rule: "CROSS-CHECK RULE"
  }
];
