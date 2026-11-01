# Real-World Examples (Karpathy Principles)

> Original source: [multica-ai/andrej-karpathy-skills/EXAMPLES.md](https://github.com/multica-ai/andrej-karpathy-skills/blob/main/EXAMPLES.md)  
> Adapted for Antigravity Skill Reference.

Real-world code examples demonstrating the four principles. Each example shows what LLMs commonly do wrong and how to fix it.

---

## 1. Think Before Coding

### Example 1: Hidden Assumptions
**User Request:** "Add a feature to export user data"

❌ **What LLMs Do (Wrong Assumptions)**
- Exports all users without pagination or privacy considerations.
- Arbitrarily decides file format, destination, and fields.

✅ **What Should Happen (Surface Assumptions)**
Before implementing, explicitly clarify:
1. **Scope:** Export all users or filtered subset?
2. **Format:** Browser download, background email, or API endpoint?
3. **Fields:** Which user fields to include?
4. **Volume:** Expected data size?

---

## 2. Simplicity First

### Example: Over-abstraction
**User Request:** "Add a function to calculate discount"

❌ **What LLMs Do (Overengineered)**
- Introduces `DiscountStrategy` interface, `PercentageDiscount`, `FixedDiscount`, `DiscountConfig`, `DiscountCalculator` classes (30+ lines of scaffolding).

✅ **What Should Happen (Simple)**
```javascript
function calculateDiscount(amount, percent) {
  return amount * (percent / 100);
}
```
*Add complexity only when multiple discount types or dynamic rules are actually required by the project.*

---

## 3. Surgical Changes

### Example: Drive-by Refactoring
**User Request:** "Fix the bug where upload status doesn't update"

❌ **What LLMs Do**
- Rewrites surrounding functions with new arrow function syntax, reorganizes imports, changes quotation marks from `'` to `"`, reformats indentation.

✅ **What Should Happen**
- Change **only** the lines required to fix the status update bug.
- Match existing quote styles, indentation, and conventions.
- Clean up only variables/imports orphaned by your own change.

---

## 4. Goal-Driven Execution

### Example: Test / Verification First
**User Request:** "The sorting breaks when there are duplicate scores"

❌ **What LLMs Do (Fix Without Reproducing)**
- Immediately rewrites the sort method without confirming why it broke or verifying edge cases.

✅ **What Should Happen (Reproduce & Verify)**
1. Reproduce the bug or inspect the exact condition where ties break.
2. Apply the minimal fix (e.g., secondary sort key).
3. Verify that ties are resolved deterministically and existing sorting behavior is preserved.

