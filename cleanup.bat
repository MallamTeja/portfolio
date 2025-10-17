@echo off
echo Cleaning up project...

REM Remove directories
rmdir /s /q .forestry
rmdir /s /q .github
rmdir /s /q .vercel

REM Remove files
del /q CHANGELOG.md
rd /s /q .next

REM Clean up public directory
if exist "public\tejamallam-illustration.webp" del "public\tejamallam-illustration.webp"
if exist "public\index-admin.html" del "public\index-admin.html"

REM Remove deployment configs
del /q vercel.json

REM Remove package-lock.json and node_modules
if exist "package-lock.json" del /q package-lock.json
if exist "node_modules" rmdir /s /q node_modules

echo Cleanup complete. Run 'npm install' to reinstall dependencies.
pause
