import React from "react";
import { Button, Form, Header, Segment } from "semantic-ui-react";

export default function EventForm({setFormOpen}){
    return(
        <Segment clearing>
            <Header content="Create new Event" />
            <Form>
                <Form.Field>
                    <input type="text" placeholder="Event Title" />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Event Category" />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Event Description" />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Event City" />
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Event Venue" />
                </Form.Field>
                <Form.Field>
                    <input type="date" placeholder="Event Date" />
                </Form.Field>
                <Button type="submit" floated="right" positive content='Submit' />
                <Button type="submit" onClick={() => setFormOpen(false)} floated="right" content='Cancel' />
            </Form>
        </Segment>
    );
}