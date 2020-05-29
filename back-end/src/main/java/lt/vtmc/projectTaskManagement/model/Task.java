package lt.vtmc.projectTaskManagement.model;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lt.vtmc.projectTaskManagement.enums.Priority;
import lt.vtmc.projectTaskManagement.enums.State;

@Getter @Setter @NoArgsConstructor
public class Task {
	@NotBlank
	private String taskTitle;
	@NotBlank
	private String taskDescription;
	@NotNull
	private Priority taskPriority;
	@NotNull
	private State taskState;
	public Task(String taskTitle, String taskDescription, Priority taskPriority, State taskState) {

		this.taskTitle = taskTitle;
		this.taskDescription = taskDescription;
		this.taskPriority = taskPriority;
		this.taskState = taskState;
	}
	
	
}
