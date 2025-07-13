for dir in "$@"; do
  mkdir -p "$dir" && touch "$dir/main.md"
done
