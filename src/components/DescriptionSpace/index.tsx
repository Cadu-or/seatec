import "./style.css"
import { Form, Input } from "antd";
import TextAreaImage from "../../assets/images/TextAreaImage";

export function DescriptionSpace() {
  var placeholder = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit suscipit porttitor. Suspendisse ex lorem, rhoncus nec ante eu, venenatis aliquam turpis. Nulla facilisi. Curabitur nec mattis dolor. Nulla finibus bibendum ligula tempus vehicula. Ut at tristique libero, nec efficitur dui. Aliquam erat volutpat. Fusce quam sem, tempus nec justo eget, luctus scelerisque velit. Nam sollicitudin purus urna, vitae ornare neque tincidunt vel. Proin ac lacinia erat, et commodo felis. Phasellus tempor tellus eu vulputate tempus.";
  return (
    <div className="description-container">
      <Form.Item style={{padding: '15px'}}>
        <Input.TextArea rows={20} placeholder={placeholder} autoSize={{ minRows:15, maxRows: 20 }} />
      </Form.Item>
      <div className="image-container">
        <TextAreaImage/>
      </div>
    </div>
  );
}
