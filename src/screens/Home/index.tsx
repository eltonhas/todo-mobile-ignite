import * as Crypto from 'expo-crypto'

import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { styles } from './styles'

import Logo from '../../assets/logo.png'
import { EmptyList } from '../../componets/EmptyList'
import { useState } from 'react'
import { TaskCard } from '../../componets/TaskCard'

interface Task {
  id: string
  text: string
  done: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [taskText, setTaskText] = useState('')

  const [focusInput, setFocusInput] = useState(false)
  const [plusButtonPress, setPlusButtonPress] = useState(false)

  const inputStyle = focusInput ? styles.inputOnFocus : styles.input
  const plusButtonStyle = plusButtonPress
    ? styles.plusButtonOnPress
    : styles.plusButton

  function handleTask() {
    const task: Task = {
      id: Crypto.randomUUID(),
      text: taskText,
      done: false,
    }

    setTasks((state) => [...state, task])

    setTaskText('')
  }

  function handleTaskDelete(id: string) {
    const removingTask = tasks.filter((task) => task.id !== id)

    setTasks(removingTask)
  }
  function handleTaskDone(id: string) {
    const gettingTask = tasks.filter((task) => task.id === id)

    gettingTask[0].done = !gettingTask[0].done

    const removingTask = tasks.filter((task) => task.id !== id)

    setTasks([...removingTask, gettingTask[0]])
  }
  function countTasksDone() {
    const tasksDone = tasks.filter((task) => task.done)

    return tasksDone.length
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} alt="" />
      </View>
      <View style={styles.form}>
        <TextInput
          style={inputStyle}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onFocus={() => setFocusInput(true)}
          onBlur={() => setFocusInput(false)}
          onChangeText={(e) => setTaskText(e)}
          value={taskText}
        />
        <TouchableOpacity
          style={plusButtonStyle}
          activeOpacity={1}
          onPress={handleTask}
          onPressIn={() => setPlusButtonPress(true)}
          onPressOut={() => setPlusButtonPress(false)}
        >
          <Feather name="plus-circle" size={16} color="#F2F2F2" />
        </TouchableOpacity>
      </View>
      <View style={styles.status}>
        <View style={styles.statusGroup}>
          <Text style={styles.createText}>Criadas</Text>
          <Text style={styles.statusNumber}>{tasks.length}</Text>
        </View>
        <View style={styles.statusGroup}>
          <Text style={styles.concludedText}>Concluidas</Text>
          <Text style={styles.statusNumber}>{countTasksDone()}</Text>
        </View>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskCard
            id={item.id}
            text={item.text}
            done={item.done}
            onDelete={handleTaskDelete}
            onDone={handleTaskDone}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <EmptyList />}
      />
    </View>
  )
}
