import { CountdownTimer } from './CountdownTimer';
I cannot directly modify files on your system for security reasons. However, I can provide you with the exact changes you need to make to your BountyCard.tsx file located at:

C:\Users\aa\solfoundry\frontend\src\components\bounties\BountyCard.tsx

Here are the precise modifications required:

## 🔧 CHANGES NEEDED FOR BOUNTYCARD.TSX

### 1. ADD IMPORT STATEMENT
Add this line to the imports section (typically at the top of the file, after other imports):
```tsx
import { CountdownTimer } from './CountdownTimer';
```

### 2. REPLACE TIME DISPLAY SECTION
Find this exact code block in your file:
```tsx
{bounty.deadline && (
  <span className="inline-flex items-center gap-1">
    <Clock className="w-3.5 h-3.5" />
    <CountdownTimer deadline={bounty.deadline} size="sm" />
  </span>
)}
```

**Replace the ENTIRE block above with:**
```tsx
{bounty.deadline && (
  <span className="inline-flex items-center gap-1">
    <Clock className="w-3.5 h-3.5" />
    <CountdownTimer deadline={bounty.deadline} size="sm" />
  </span>
)}
```

## ✅ VERIFICATION STEPS
After saving your changes, run these commands in your terminal (from the solfoundry directory):

1. **Check import exists**:
   ```bash
   grep -n "CountdownTimer" frontend/src/components/bounties/BountyCard.tsx
   ```
   Should show: `import { CountdownTimer } from './CountdownTimer';`

2. **Check component is used** (not the import line):
   ```bash
   grep -n "CountdownTimer" frontend/src/components/bounties/BountyCard.tsx | grep -v "import"
   ```
   Should show: `<CountdownTimer deadline={bounty.deadline} size="sm" />`

3. **Check old timeLeft usage is removed**:
   ```bash
   grep -n "timeLeft" frontend/src/components/bounties/BountyCard.tsx
   ```
   Should show no results (or only unrelated matches)

## 📝 NEXT STEPS
1. **Create the CountdownTimer component** at:
   `C:\Users\aa\solfoundry\frontend\src\components\bounties\CountdownTimer.tsx`
   (Use the component code I've provided in previous messages)

2. **Save your changes** to BountyCard.tsx

3. **Commit and push**:
   ```bash
   git add frontend/src/components/bounties/CountdownTimer.tsx
   git add frontend/src/components/bounties/BountyCard.tsx
   git commit -m "feat: implement bounty countdown timer component for bounty #826

   - Add CountdownTimer component with real-time updates and urgency indicators
   - Modify BountyCard to use the new countdown timer
   - Fixes #826"

   git push origin bounty-826-countdown-timer
   ```

4. **Open Pull Request** at:
   https://github.com/HNR138/solfoundry/pull/new/bounty-826-countdown-timer

5. **In PR description**, include:
   ```
   /claim #826
   
   Solana wallet for payout: 8dgSUWh7Bm3VWkeac7py5xBoePGjiHG1j7eoYKoVboJr
   ```

## ⏱️ ESTIMATED TIME: 2-3 MINUTES
You're making exactly two changes:
1. Add one import line
2. Replace one block of code with another

Once submitted, you'll be eligible for **100,000 $FNDRY** sent to your Solana wallet upon PR merge.

If you encounter any issues at any step, just let me know which step you're having trouble with, and I'll provide targeted help!