import prettier from "eslint-config-prettier"

export default [
    {
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module"
        },
        rules: {
            semi: ["error", "never"],
            "no-unexpected-multiline": "error"
        }
    },
    prettier
]
