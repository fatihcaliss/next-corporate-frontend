import NextImage from "../elements/image"
import UpIcon from "../icons/up"
import DownIcon from "../icons/down"
import { useState } from "react"

const FrequentlyAskedQuestions = ({ data }) => {
    const [openQuestions, setOpenQuestions] = useState(
        data?.questions.reduce((acc, { id }) => {
            acc[id] = false
            return acc
        }, {})
    )

    const handleQuestion = (id) =>
        setOpenQuestions((oldState) => ({ ...oldState, [id]: !oldState[id] }))

    return (
        <div className="container flex flex-col md:flex-row items-center justify-between gap-12 py-12">
            <div className="flex-1 sm:pr-8 mt-6 md:mt-0">
                {data?.picture?.data && <NextImage media={data.picture} />}
            </div>
            <div className="flex-shrink-0 w-full md:w-6/12 ">
                <span className="font-semibold uppercase mb-4 sm:mb-2">
                    {data?.headTitle}
                </span>
                <h2 className="text-3xl sm:text-4xl font-semibold mb-10 sm:mb-6">
                    {data?.title}
                </h2>

                <ul className="shadow-box">
                    {data?.questions?.map(({ id, title, description }) => (
                        <li className="relative border-b-2 border-gray-200">
                            <button
                                onClick={() => handleQuestion(id)}
                                className="w-full py-4 text-left"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="font-medium">{title}</span>
                                    {openQuestions[id] ? <UpIcon /> : <DownIcon />}
                                </div>
                            </button>
                            {openQuestions[id] && (
                                <div className="relative overflow-hidden">
                                    <div className="py-2">
                                        <p className="text-sm text-gray-700 tracking-wide leading-relaxed">
                                            {description}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default FrequentlyAskedQuestions