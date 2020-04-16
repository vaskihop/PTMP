package lt.vtmc.projectTaskManagement.repository;

import org.springframework.data.repository.CrudRepository;

import lt.vtmc.projectTaskManagement.model.TaskEntity;

public interface TaskRepository extends CrudRepository<TaskEntity, Long> {

}
