# Typescript

typescript


```json
// tsconfig.json
{
  "compilerOptions": {
    "jsx": "preserve",
    /*
     * 是否允许有未使用的变量
     * 在 jsx，tsx 开发中，存在，拿 props 中的值作为标签，这种情况下，被认定为未使用变量，因此设置false
     */
    "noUnusedLocals": false,
  }
}
```