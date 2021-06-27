import fs from "fs"
import Boil from ".."

/**
 * Removes the content generated by the official Create Next App CLI tool.
 */
export async function removeOfficialCNAContent(this: Boil): Promise<void> {
  this.log("Cleaning up official Next.js boilerplate...")

  const remove = (path: string) => {
    fs.rmSync(path, {
      recursive: true,
      force: true,
    })
  }

  try {
    remove(`${this.answers.projectName}/pages`)
    remove(`${this.answers.projectName}/styles`)
    remove(`${this.answers.projectName}/public/vercel.svg`)
    // TODO: Remove README.md when/if another one is generated.
  } catch (error) {
    this.error(
      "An error occurred while removing the content generated by the official Create Next App CLI tool.",
      {
        exit: 1,
      }
    )
  }
}
