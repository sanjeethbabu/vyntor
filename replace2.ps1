$files = Get-ChildItem D:\vyntor\src -Recurse -File
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $newContent = $content -replace 'vastverse', 'vastvers'
    if ($content -ne $newContent) {
        Set-Content $file.FullName $newContent
        Write-Host "Updated: $($file.FullName)"
    }
}