# Button Design System.

## Properties That The Button Component Can Be Passed

| Property         | Description                         | Type          | Required |
| :--------------- | :---------------------------------- | :------------ | :------- |
| `disabled`       | Sets the button to a disabled state | `boolean`     | false    |
| `label `         | The button text                     | `string`      | true     |
| `onClickHandler` | The action to be dispatched onClick | `function`    | true     |
| `size`           | The size of the button              | `ButtonSizes` | false    |
| `type`           | The type of button                  | `ButtonTypes` | false    |

## Types

| Type          | Values                           | Default    |
| :------------ | :------------------------------- | :--------- |
| `ButtonSizes` | `SMALL` `MEDIUM` `LARGE`         | `MEDIUM`   |
| `ButtonTypes` | `PRIMARY` `SECONDARY` `TERTIARY` | `PRIMARY ` |

### Example of using the Button component

```jsx
<Button
  label="Button"
/>
<Button
  size="small"
  label="Button"
  type="secondary"
/>
<Button
  size="large"
  label="Button"
  type="tertiary"
  onClickHandler={() => alert("You Clicked Me!")}
/>

```

### Demo

![Button Display](https://github.com/nnnkit/react-tasks/raw/master/button-types/buttons.png)


<!-- Problem solver and fast learner with strong communication skills. I am motivated to upgrade and expand my skill set through mentorship and challenging projects. I enjoy working collaboratively but can also run with projects independently. I am excited about the prospect of joining a Ingoude company. -->