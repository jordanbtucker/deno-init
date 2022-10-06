/**
 * @file Removes all files and directories in the .coverage directory.
 */

const coverageDir = ".coverage";

for (const { name } of Deno.readDirSync(coverageDir)) {
  Deno.removeSync(`${coverageDir}/${name}`, { recursive: true });
}
