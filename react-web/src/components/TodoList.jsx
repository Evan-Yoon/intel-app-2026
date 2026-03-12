import React, { useState, useEffect } from "react";
import { Trash2, Sun } from "lucide-react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos
      ? JSON.parse(savedTodos)
      : [
          { id: 1, text: "할일을 엔터키로도 입력되도록", completed: true },
          { id: 2, text: "입력 후 입력창 지우기", completed: true },
          {
            id: 3,
            text: "입력을 안하거나 space만 있으면 입력 X",
            completed: true,
          },
          { id: 4, text: "완료된 항목만 삭제", completed: true },
          { id: 5, text: "정말 삭제하시겠습니까?", completed: true },
          { id: 6, text: "다시 묻지 않기", completed: true },
          { id: 7, text: "삭제 확인창 설정 초기화", completed: true },
          { id: 8, text: "모두 삭제", completed: false },
          { id: 9, text: "정렬", completed: false },
          { id: 10, text: "다크모드", completed: false },
          { id: 11, text: "입력된 시간 추가", completed: false },
          { id: 12, text: "내용 수정", completed: false },
          { id: 13, text: "우선순위 추가", completed: false },
          { id: 14, text: "드래그해서 순서 바꾸기", completed: false },
        ];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const [todoInput, setTodoInput] = useState("");

  // 모달 관련 상태
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [targetId, setTargetId] = useState(null);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  const handleCompleteToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const handleAddTodo = () => {
    if (todoInput.trim() === "") {
      alert("할 일을 입력해주세요.");
    } else {
      const newTodo = { id: Date.now(), text: todoInput, completed: false };
      setTodos([...todos, newTodo]);
    }
    setTodoInput("");
  };

  // 삭제 버튼 클릭 시 실행 로직
  const handleDeleteTodo = (id) => {
    const isSkip = localStorage.getItem("skipDeleteConfirm");

    if (isSkip === "true") {
      // 이미 스킵 설정이 되어 있다면 바로 삭제
      executeDelete(id);
    } else {
      // 설정이 없다면 커스텀 모달 띄우기
      setTargetId(id);
      setIsModalOpen(true);
    }
  };

  // 실제 삭제 처리
  const executeDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    setIsModalOpen(false);
    setTargetId(null);
  };

  // 모달 내 '확인' 클릭 시
  const handleConfirmModal = () => {
    if (dontShowAgain) {
      localStorage.setItem("skipDeleteConfirm", "true");
    }
    executeDelete(targetId);
  };

  const resetSetting = () => {
    localStorage.removeItem("skipDeleteConfirm");
    alert("다시 묻기 설정이 초기화되었습니다.");
  };

  // 완료된 항목만 삭제하는 함수
  const handleCompleteDelete = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-20">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-md border border-gray-200">
        {/* 헤더 */}
        <h1 className="text-3xl font-bold text-center mb-6">📝 투두리스트</h1>
        {/* 다크모드 */}
        <button onClick={() => {}}>
          <Sun />
        </button>
        {/* 입력창 & 버튼 */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="할 일을 입력하세요"
            className="flex-1 border border-gray-300 rounded px-4 py-3 outline-none"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
            onKeyUp={(e) => e.key === "Enter" && handleAddTodo()}
          />
          <button
            className="bg-purple-500 text-white font-bold px-6 py-3 rounded hover:bg-purple-600 transition-colors"
            onClick={handleAddTodo}
          >
            추가
          </button>
        </div>

        {/* 할 일 목록 */}
        <ul className="max-h-[400px] overflow-y-auto pr-2">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleCompleteToggle={handleCompleteToggle}
              handleDeleteTodo={handleDeleteTodo}
            />
          ))}
        </ul>

        {/* 완료된 항목만 삭제하는 버튼 */}
        <button
          onClick={handleCompleteDelete}
          className="mt-6 w-full text-xs text-gray-400 underline hover:text-gray-600"
        >
          완료된 항목만 삭제
        </button>

        {/* 설정 초기화 버튼 */}
        <button
          onClick={resetSetting}
          className="mt-6 w-full text-xs text-gray-400 underline hover:text-gray-600"
        >
          삭제 확인창 설정 초기화
        </button>
      </div>

      {/* --- 커스텀 컨펌 모달 --- */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white w-full max-w-xs p-6 rounded-xl shadow-2xl">
            <h2 className="text-xl font-bold mb-2">정말 삭제할까요?</h2>
            <p className="text-gray-500 text-sm mb-6">
              이 작업은 취소할 수 없습니다.
            </p>

            <div className="flex items-center gap-2 mb-6 cursor-pointer group">
              <input
                type="checkbox"
                id="modalDontShow"
                className="w-4 h-4 cursor-pointer"
                checked={dontShowAgain}
                onChange={(e) => setDontShowAgain(e.target.checked)}
              />
              <label
                htmlFor="modalDontShow"
                className="text-sm text-gray-600 cursor-pointer group-hover:text-gray-900"
              >
                다시 묻지 않기
              </label>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex-1 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200"
              >
                취소
              </button>
              <button
                onClick={handleConfirmModal}
                className="flex-1 py-2 bg-red-500 text-white rounded-lg font-bold hover:bg-red-600"
              >
                삭제
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoList;
