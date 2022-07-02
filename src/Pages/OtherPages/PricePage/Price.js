import { Container, Form, Field, Label, Input, Star, InputAlone, Textarea, Anchor} from "./PriceStyle";
import Head from "../../../Sections/MainSections/Header/Header";


const Price = () => {

    return(
        <Container>
            <Head title={"أطلب عرض سعر"} />
            <Form>
                <Field>
                    <Label for="name"> الإسم الكريم <Star>*</Star></Label>
                    <Input type="name" required />
                </Field>
                <Field>
                    <Label for="name"> رقم الجوال <Star>*</Star></Label>
                    <Input type="name" required />
                </Field>
            </Form>
            <Form>
                <Field>
                    <Label for="email"> البريد الالكتروني <Star>*</Star></Label>
                    <Input type="email" required />
                </Field>
                <Field>
                    <Label for="name"> اسم الجهة المطلوب تقديم الخدمات لها </Label>
                    <Input type="name" />
                </Field>
            </Form>
            <Form>
                <Field>
                    <Label for="question">  ما هي الخدمات التي تحتاجها من هندسة البنيان للتسويق الرقمي <Star>*</Star></Label>
                    <InputAlone type="text" placeholder="...." required />
                </Field>
            </Form>
            <Form>
                <Field>
                    <Label for="question"> كم الميزانية المتوقعة لطلبك ؟</Label>
                    <Input type="emtextail" />
                </Field>
                <Field>
                    <Label for="question"> كيف تعرفت علينا ؟</Label>
                    <Input type="text" placeholder="...." />
                </Field>
            </Form>
            <Form>
                <Field>
                    <Label for="question">  ما هي الخدمات التي تحتاجها من هندسة البنيان للتسويق الرقمي <Star>*</Star></Label>
                    <Textarea type="text" />
                </Field>
            </Form>
            <Anchor>أرسل الطلب</Anchor>
        </Container>
    );
}

export default Price;