import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

interface TaskProps {
  id: string
  text: string
  done: boolean
  onDelete: (id: string) => void
  onDone: (id: string) => void
}

export function TaskCard({ id, done, text, onDelete, onDone }: TaskProps) {
  const [trashButtonPress, setTrashButtonPress] = useState(false)
  const [doneButtonPress, setDoneButtonPress] = useState(false)
  const trashButtonStyle = trashButtonPress
    ? styles.trashButtonOnPress
    : styles.trashButton
  const doneButtonStyle = doneButtonPress ? styles.checkOnPress : styles.check
  const checkDoneButtonStyle = doneButtonPress
    ? styles.checkDoneOnPress
    : styles.checkDone
  const styleText = done ? styles.textTaskDone : styles.textTask

  function handleDelete() {
    onDelete(id)
  }
  function handleDone() {
    onDone(id)
  }
  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity
        onPressIn={() => setDoneButtonPress(true)}
        onPressOut={() => setDoneButtonPress(false)}
        activeOpacity={1}
        onPress={handleDone}
      >
        {done ? (
          <View style={checkDoneButtonStyle}>
            <Feather name="check" size={16} color="white" />
          </View>
        ) : (
          <View style={doneButtonStyle} />
        )}
      </TouchableOpacity>
      <Text style={styleText}>{text}</Text>
      <TouchableOpacity
        activeOpacity={1}
        style={trashButtonStyle}
        onPress={handleDelete}
        onPressIn={() => setTrashButtonPress(true)}
        onPressOut={() => setTrashButtonPress(false)}
      >
        <Feather
          name="trash-2"
          size={24}
          color={trashButtonPress ? '#E25858' : '#808080'}
        />
      </TouchableOpacity>
    </View>
  )
}
