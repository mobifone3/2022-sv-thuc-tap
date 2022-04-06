# TRAINING

## 1. Ngày 1: Component state props

```js
return (
  <tbody>
    {data.map((item, idx) => (
      <TableRow key={idx} ten={item.ten} ho={item.ho} email={item.email} stt={item.stt}></TableRow>
    ))}
  </tbody>
);
```
