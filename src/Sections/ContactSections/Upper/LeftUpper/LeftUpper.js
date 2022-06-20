import { All, Left, Form, Field, Input, Textarea, Anchor} from './LeftUpperStyle'

const LeftUp = () => {

    return(
        <All>
            <Left>
                <Form action="" method="post">
                    <Field>
                        <Input type="email" name="email" placeholder='البريد الالكتروني' required />
                    </Field>
                    <Field>
                        <Input type="text" name="name" placeholder='الإسم' required />
                    </Field>
                    <Field>
                        <Textarea rows="5" name="msg" placeholder='نص الرسالة' required />
                    </Field>
                    <Anchor>إرسال رسالة</Anchor>
                </Form>        
            </Left>  
        </All>

    );
}

export default LeftUp;

// onSubmit={this.handleSubmit.bind(this)}