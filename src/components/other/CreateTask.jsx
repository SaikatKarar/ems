import React from 'react'

function CreateTask() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-8">
            <div className="bg-[#1f1f1f] w-full max-w-4xl rounded-xl shadow-lg p-10">
                <h2 className="text-3xl font-bold text-white mb-8">Create Task</h2>

                <form className="grid grid-cols-2 gap-6">
                    {/* Task Title */}
                    <div className="col-span-2">
                        <label className="block text-white text-sm mb-2">Task Title</label>
                        <input
                            type="text"
                            placeholder="Make a UI design"
                            className="w-full p-3 rounded bg-[#2a2a2a] text-white placeholder-gray-400 focus:outline-none"
                        />
                    </div>

                    {/* Description */}
                    <div className="col-span-2">
                        <label className="block text-white text-sm mb-2">Description</label>
                        <textarea
                            placeholder="Detailed description of task. Max 500 words"
                            rows="4"
                            className="w-full p-3 rounded bg-[#2a2a2a] text-white placeholder-gray-400 focus:outline-none resize-none"
                        ></textarea>
                    </div>

                    {/* Date */}
                    <div>
                        <label className="block text-white text-sm mb-2">Date</label>
                        <input
                            type="date"
                            className="w-full p-3 rounded bg-[#2a2a2a] text-white focus:outline-none"
                        />
                    </div>

                    {/* Assign To */}
                    <div>
                        <label className="block text-white text-sm mb-2">Assign To</label>
                        <input
                            type="text"
                            placeholder="User Name"
                            className="w-full p-3 rounded bg-[#2a2a2a] text-white placeholder-gray-400 focus:outline-none"
                        />
                    </div>

                    {/* Category */}
                    <div className="col-span-2">
                        <label className="block text-white text-sm mb-2">Category</label>
                        <input
                            type="text"
                            placeholder="Design, Development, etc."
                            className="w-full p-3 rounded bg-[#2a2a2a] text-white placeholder-gray-400 focus:outline-none"
                        />
                    </div>

                    {/* Button */}
                    <div className="col-span-2 flex justify-end">
                        <button className="bg-white text-black font-semibold py-3 px-8 rounded hover:bg-gray-200 transition">
                            Create Task
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateTask