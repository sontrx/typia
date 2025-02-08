#!/usr/bin/env bash
install() {
  pnpm install
}

test() {
  pnpm run build
  cd test
  pnpm run generate-test
}

publish() {
  npm publish
}
 
#-------------------------------------------------------------------------
# Check if at least one argument is passed
if [ $# -lt 1 ]; then
  echo "Usage: sh make.sh <function_name> [arguments...]"
  exit 1
fi

# Extract the function name from the first argument
FUNCTION_NAME=$1
shift # Shift the positional arguments to remove the first argument

# Check if the function exists and call it with all remaining arguments
if command -v "$FUNCTION_NAME" > /dev/null 2>&1; then
  $FUNCTION_NAME "$@"
else
  echo "Error: Function '$FUNCTION_NAME' not found."
  exit 1
fi