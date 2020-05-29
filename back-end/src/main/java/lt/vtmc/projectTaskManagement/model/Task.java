package lt.vtmc.projectTaskManagement.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lt.vtmc.projectTaskManagement.enums.Priority;
import lt.vtmc.projectTaskManagement.enums.State;

@Getter @Setter @NoArgsConstructor
public class Task {
	
	private String taskTitle;
	private String taskDescription;
	private Priority taskPriority;
	private State taskState;
	public Task(String taskTitle, String taskDescription, Priority taskPriority, State taskState) {

		this.taskTitle = taskTitle;
		this.taskDescription = taskDescription;
		this.taskPriority = taskPriority;
		this.taskState = taskState;
	}
	
	
}
