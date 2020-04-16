package lt.vtmc.projectTaskManagement.model;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lt.vtmc.projectTaskManagement.enums.Priority;
import lt.vtmc.projectTaskManagement.enums.State;

@Getter @Setter @NoArgsConstructor
public class Task {
	
	private String taskTitle;
	private String taskDescription;
	private String taskPriority;
	private String taskState;
	public Task(String taskTitle, String taskDescription, String taskPriority, String taskState) {

		this.taskTitle = taskTitle;
		this.taskDescription = taskDescription;
		this.taskPriority = taskPriority;
		this.taskState = taskState;
	}
	
	
}
