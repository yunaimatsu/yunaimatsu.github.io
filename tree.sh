#!/bin/bash

TARGET_DIR="."                # Target directory to scan (current directory)
OUTPUT_FILE="index.html"      # Output HTML filename

# List of files to exclude from scanning
EXCLUDES=("index.html" "style.css" "script.js" "README.md" "tree.sh" "favicon.jpeg")

# Function to check if a file is excluded
is_excluded() {
  local filename=$(basename "$1")  # Get basename of the path
  for ex in "${EXCLUDES[@]}"; do   # Loop through exclude list
    if [[ "$filename" == "$ex" ]]; then
      return 0                     # Return true (excluded) if match
    fi
  done
  return 1                         # Return false (not excluded) if no match
}

# Convert "my-folder-name" → "My Folder Name"
prettify_name() {
  local raw="$1"
  # Replace '-' with space
  raw="${raw//-/ }"
  # Capitalize each word
  echo "$raw" | awk '{ for (i=1; i<=NF; i++) $i = toupper(substr($i,1,1)) substr($i,2) } 1'
}

# Recursive function to generate HTML list from directory using details/summary
generate_html() {
  local dir_path="$1"              # Current directory to scan
  local indent="$2"               # Indentation for pretty formatting

  echo "${indent}<ul>" >> "$OUTPUT_FILE"   # Open <ul> for listing items

  # Loop over sorted contents of the directory
  for item in "$dir_path"/*; do
    [ -e "$item" ] || continue   # Skip if item does not exist (safe check)
    if is_excluded "$item"; then
      continue                   # Skip excluded files
    fi

    # local name=$(basename "$item")    # Extract basename
    local name=$(basename "$item")
    local pretty_name=$(prettify_name "$name")
    local rel_path=$(realpath --relative-to="$TARGET_DIR" "$item")  # Relative path from target
    local link_path="$rel_path"
    if [[ "$link_path" == *.md ]]; then
      link_path="${link_path%.md}"
    fi

    if [ -d "$item" ]; then
      # If directory, use <details> and <summary>
      echo "${indent}  <li>" >> "$OUTPUT_FILE"
      echo "${indent}    <details>" >> "$OUTPUT_FILE"
      echo "${indent}      <summary>${pretty_name}</summary>" >> "$OUTPUT_FILE"
      generate_html "$item" "      $indent"   # Recurse with deeper indent
      echo "${indent}    </details>" >> "$OUTPUT_FILE"
      echo "${indent}  </li>" >> "$OUTPUT_FILE"
    elif [ -f "$item" ]; then
      # If file, check extension
      local ext="${name##*.}"
      # Detect file extensions for HTML and MD
        if [[ "$ext" == "html" || "$ext" == "md" ]]; then
        # Remove file extension for display
        local display_name=$(prettify_name "${name%.*}")
        echo "${indent}  <li><a href=\"./$link_path\">${display_name}</a></li>" >> "$OUTPUT_FILE"
        else
        echo "${indent}  <li>${name}</li>" >> "$OUTPUT_FILE"
        fi
    fi
  done

  echo "${indent}</ul>" >> "$OUTPUT_FILE"   # Close <ul>
}

# Write the output HTML file (header part)
cat <<EOF > "$OUTPUT_FILE"
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <title>Directory Tree</title>
  <style>
    ul { list-style: none; padding-left: 1em; }
    details > summary {
      cursor: pointer;
      font-weight: bold;
      user-select: none;
    }
    details > summary::-webkit-details-marker {
      display: none;
    }
  </style>
</head>
<body>
  <ul id="tree">
EOF

# Loop over top-level items in the target directory
loop_top(){
    for item in "$TARGET_DIR"/*; do
    [ -e "$item" ] || continue          # Skip if not exist
    if is_excluded "$item"; then
        continue                         # Skip excluded files
    fi
        # local name=$(basename "$item")      # Get basename
        local name=$(basename "$item")
        local pretty_name=$(prettify_name "$name")
    if [ -d "$item" ]; then
        echo "    <li>" >> "$OUTPUT_FILE"
        echo "      <details>" >> "$OUTPUT_FILE"
        echo "        <summary>${pretty_name}</summary>" >> "$OUTPUT_FILE"
        generate_html "$item" "          "   # Increase indentation consistently
        echo "      </details>" >> "$OUTPUT_FILE"
        echo "    </li>" >> "$OUTPUT_FILE"
    elif [ -f "$item" ]; then
        # File at root level
        local ext="${name##*.}"          # Get file extension
        # Detect file extensions for HTML and MD
        if [[ "$ext" == "html" || "$ext" == "md" ]]; then
        # Remove file extension for display
        local display_name=$(prettify_name "${name%.*}")
        echo "${indent}  <li><a href=\"./$link_path\">${display_name}</a></li>" >> "$OUTPUT_FILE"
        else
        echo "${indent}  <li>${name}</li>" >> "$OUTPUT_FILE"
        fi
    fi
    done
}

loop_top

# Close the list and HTML body
cat <<EOF >> "$OUTPUT_FILE"
  </ul>
</body>
</html>
EOF

echo "✅ $OUTPUT_FILE generated!"
