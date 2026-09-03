# Git Workflow Rule

**Description**: Enforces a strict, atomic, conventional-commit Git workflow for all changes made in this codebase.

## Workflow Rules

1. **TRACK EVERY CHANGE**
   - Whenever you modify, add, or delete any file — whether it's a bug fix, a small update, a refactor, or a brand-new feature — treat it as a unit of work that must be committed.
   - Do not batch multiple unrelated changes into one commit. If you make several distinct changes in one session, split them into separate commits.

2. **COMMIT AFTER EACH LOGICAL CHANGE**
   - As soon as a change is complete and working (i.e., it doesn't break the build or introduce obvious errors), stage only the relevant files with `git add`.
   - Write a clear, conventional-commit-style message describing what changed and why, using this format:
     `<type>: <short description>`
     where `<type>` is one of: `feat`, `fix`, `refactor`, `style`, `docs`, `chore`, `test`, `perf`.
   - Never use vague messages like "update" or "changes".

3. **PUSH IMMEDIATELY AFTER COMMITTING**
   - After every commit, push it to the current remote branch right away.
   - Do not let commits pile up locally — the remote should always reflect the latest working state.
   - If the current branch has no upstream set, set it on first push (`git push -u origin <branch-name>`).

4. **SAFETY CHECKS BEFORE COMMITTING**
   - Do not commit code that fails to compile/run or has syntax errors.
   - Do not commit secrets, API keys, .env files, or credentials — check for these before staging and warn the user if any are found.
   - Do not commit unrelated auto-generated files (build artifacts, node_modules, cache files) — respect `.gitignore`, and add missing entries if needed.

5. **COMMUNICATE WHAT YOU DID**
   - After each commit + push, briefly tell the user: what changed, the commit message used, and the branch it was pushed to.
   - If a push fails (e.g., merge conflict, diverged branch), stop, explain the issue clearly, and ask how to proceed instead of forcing the push.

6. **BRANCH AWARENESS**
   - Stay on the current branch unless explicitly told to create or switch branches.
   - For a large/risky new feature, ask whether the user wants it on a new feature branch before starting, then follow the same commit-and-push rhythm on that branch.
