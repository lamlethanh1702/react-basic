import React from 'react';
import './Demo.scss';
class ChildComponent extends React.Component {
    state = {
        showJobs: false,
    };

    handleShowHide = () => {
        this.setState({ showJobs: !this.state.showJobs });
    };

    handleOnClickDelete = (job) => {
        console.log('>>> handleOnClickDelete: ', job);
        this.props.deleteAJob(job);
    };
    render() {
        console.log('>>> check props: ', this.props);

        let { arrJob } = this.props;
        let { showJobs } = this.state;
        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
        console.log('>>> check conditional: ', check);
        return (
            <>
                {showJobs === false ? (
                    <div>
                        <button className="btn-show" onClick={() => this.handleShowHide()}>
                            Show
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="Job-lists">
                            {arrJob.map((item, index) => {
                                return (
                                    <div key={item.id}>
                                        {item.title} - {item.salary} <></>{' '}
                                        <span onClick={() => this.handleOnClickDelete(item)}>x</span>
                                    </div>
                                );
                            })}
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                )}
            </>
        );
    }
}

// Để có thể sử dụng ChildComponent trong file app thì cần export default

// Đang về arrow function
// ở đây thì ko sử dụng từ khóa this được
// để lấy dữ liệu từ cha về phải có props trong () để hiểu nó lấy data từ cha về con
// LƯU Ý: Chỉ dùng function component chỉ khi có thằng HOOK, còn lại thì dùng class component để dễ xử lí

// const ChildComponent = (props) => {
//     // console.log('>>> Check child props: ', props);
//     let { arrJob } = props;
//     return (
//         <>
//             <div className="Job-lists">
//                 {arrJob.map((item, index) => {
//                     if (+item.salary >= 500) {
//                         return (
//                             <div key={item.id}>
//                                 {item.title} - {item.salary} $
//                             </div>
//                         );
//                     }
//                 })}
//             </div>
//         </>
//     );
// };
export default ChildComponent;
