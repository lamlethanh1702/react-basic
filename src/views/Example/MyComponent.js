import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';
class MyComponent extends React.Component {
    state = {
        arrJob: [
            { id: 'Job1', title: 'Developers', salary: '500' },
            { id: 'Job2', title: 'Developers2', salary: '505' },
            { id: 'Job3', title: 'Developers3', salary: '510' },
        ],
    };

    addNewJob = (job) => {
        console.log('Check job from parent: ', job);
        this.setState({
            arrJob: [...this.state.arrJob, job],
        });
    };

    deleteAJob = (job) => {
        let currentJob = this.state.arrJob;
        currentJob = currentJob.filter((item) => item.id !== job.id);
        this.setState({
            arrJob: currentJob,
        });
    };

    render() {
        console.log('>>> call render: ', this.state);
        return (
            <>
                <AddComponent addNewJob={this.addNewJob} />

                <ChildComponent arrJob={this.state.arrJob} deleteAJob={this.deleteAJob} />
            </>
        );
    }
}

export default MyComponent;
